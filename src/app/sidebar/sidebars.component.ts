/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sidebar } from '../domain/sidebar';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

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

  sidebars: Sidebar[] = [];
  data: any;

  constructor(public route: ActivatedRoute, private _zone: NgZone) {
  }

  ngOnInit() {
    //AwsUtil.initAwsService(null);
    /*AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd',
      Logins: {
        'graph.facebook.com': 'FBTOKEN',
        'www.amazon.com': 'AMAZONTOKEN',
        'accounts.google.com': 'GOOGLETOKEN'
      }
    });*/

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
    db.query(item, function (err, data) {
      if (err)
        console.log(err, err.stack);
      else {
        console.log(data);
        this.data = data;
      }
    });
    /*return awsClient.sendAwsRequest(db.query(item), function () {
      console.log("fetching sidebars...");
      return this.fetchSidebars(id);
    });*/
    if (this.data.Items) {
      for (var i = 0; i < this.data.Items.length; i++) {
        var sidebarName = this.data.Items[i].sidebarName;

        var uuid = this.data.Items[i].uuid;
        //var category = '<div><a href="index.html?sidebarId=' + uuid + '" target="_top">' + sidebarName + '</a></div>';
        //var mySecondDiv = $(category);

        var sidebar = new Sidebar();
        sidebar.sidebarName = this.data.Items[i].sidebarName;
        this.sidebars.push(sidebar);
        //$('#sidebars').append(mySecondDiv);
      }
    }

  }

  onGoogleLoginSuccess = (loggedInUser) => {
    console.log(loggedInUser);
    this._zone.run(() => {
      this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
    });
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
  }

}
