/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var gapi: any; // Google's login API namespace

@Component({
  selector: 'about',
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
