/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sidebar } from '../domain/sidebar';
import { DynamoDBService } from '../services/dynamodb.service';

// Google's login API namespace
declare var gapi: any;
declare var AWS: any;

console.log('`Frames` component loaded asynchronously');

@Component({
  selector: 'about',
  //styleUrls: ['frames.style.css'],
  templateUrl: 'sidebars.template.html'
})
export class Sidebars {
  localState;
  googleLoginButtonId = "google-login-button";
  userDisplayName = "empty";
  userAuthToken = null;
  sidebars: Array<Sidebar> = [];

  constructor(public route: ActivatedRoute, private _zone: NgZone) {}

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        this.localState = data.yourData;
      });
  }

  ngAfterViewInit() {
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onsuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "dark",
        "onfailure": function (err) { console.log("error:" + err); }
      });
    console.log("afterview: gapi started");
  }

  fetchSidebars(id) {
    console.log("fetching sidebar for " + id);
    var db = new AWS.DynamoDB.DocumentClient();
    console.log(db);
    var item = {
      TableName: 'sidebar',
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": id
      }
    };

    DynamoDBService.getSidebars(id, this.sidebars);

    console.log("result");
    console.log(this.sidebars);

  }

  onGoogleLoginSuccess = (loggedInUser) => {
    console.log(loggedInUser);
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
      this.fetchSidebars("us-east-1:129ab219-08ca-4561-946f-938cb4027fb1");
    });

  }

}
