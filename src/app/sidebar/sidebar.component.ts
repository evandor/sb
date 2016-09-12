/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare var gapi: any; // Google's login API namespace

@Component({
  selector: 'about',
  templateUrl: 'sidebar.template.html'
})
export class Sidebar implements OnInit, OnDestroy {
  localState;
  googleLoginButtonId = "google-login-button";
  userDisplayName = "empty";
  userAuthToken = null;
  private sub: Subscription;
  private uuid:string = "undef";

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
    console.log("afterview: gapi started");
  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
    this.sub = this.route.params.subscribe(params => {
      this.uuid = params['sidebar'];
      //console.log("params: " + uuid);

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onGoogleLoginSuccess = (loggedInUser) => {
    console.log(loggedInUser);
    this._zone.run(() => {
      this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
    });
  }

}
