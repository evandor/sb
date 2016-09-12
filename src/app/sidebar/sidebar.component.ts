/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DynamoDBService } from '../services/dynamodb.service';


declare var gapi: any; // Google's login API namespace
declare var AWS: any;  // Amazon

declare var jQuery:any;
 

@Component({
  selector: 'about',
  templateUrl: 'sidebar.template.html'
})
export class Sidebar implements OnInit, OnDestroy {

  googleLoginButtonId = "google-login-button";
  userDisplayName = "empty";
  userAuthToken = null;
  private sub: Subscription;
  private uuid: string = "undef";
  bookmarks: Array<any> = [];

  constructor(public route: ActivatedRoute, private _zone: NgZone) { }

  ngAfterViewInit() {
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onsuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "dark",
        "onfailure": function (err) { console.log("error:" + err); }
      });
    jQuery("#accordion").accordion();  
  }

  fetchBookmarks(id) {
    console.log("fetching sidebar " + id);
    var db = new AWS.DynamoDB.DocumentClient();
    DynamoDBService.getBookmarks(id, this.bookmarks);
    console.log(this.bookmarks);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uuid = params['sidebar'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onGoogleLoginSuccess = (loggedInUser) => {
    //console.log(loggedInUser);
    this._zone.run(() => {
      this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
      AWS.config.update({
        region: 'us-east-1',
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",
          Logins: {
            'accounts.google.com': this.userAuthToken
          }
        })
      })
      this.fetchBookmarks("d56cc24e-6326-4d11-90f6-44c5c997f5c3");
    });

  }

}
