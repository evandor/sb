/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

// Google's login API namespace
declare var gapi: any;

console.log('`Frames` component loaded asynchronously');

@Component({
  selector: 'about',
  //styleUrls: ['frames.style.css'],
  templateUrl: 'sidebar.template.html'
})
export class Sidebar {
  localState;
  googleLoginButtonId = "google-login-button";
  userDisplayName = "empty";
  userAuthToken = null;

  constructor(public route: ActivatedRoute, private _zone: NgZone) {  }

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

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Frames` component');
  }

  onGoogleLoginSuccess = (loggedInUser) => {
    console.log(loggedInUser);
    this._zone.run(() => {
      this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
    });
  }

  asyncDataWithWebpack() {

  }

}
