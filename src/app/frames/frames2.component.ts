import { Component, NgZone, OnInit, OnDestroy,
  Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { DynamoDBService } from '../services/dynamodb.service';
import { AppState } from '../domain/appstate';

declare var gapi: any; // Google's login API namespace
declare var AWS: any;  // Amazon

declare var jQuery: any;

@Component({
  selector: 'frames2',
  styleUrls: ['frames.style.css'],
  templateUrl: 'frames2.template.html',
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class Frames2 implements OnInit, OnDestroy {
  localState;
  googleLoginButtonId = "google-login-button";
  userDisplayName = "empty";
  userAuthToken = null;
  appstate: AppState;

  private sub: Subscription;
  private uuid: string = "d56cc24e-6326-4d11-90f6-44c5c997f5c3";
  //private uuid: string = "undef";
  bookmarks: Array<any> = [];
  private url: SafeResourceUrl;

  constructor(public route: ActivatedRoute, private domSanitizer: DomSanitizer, private _zone: NgZone) {
    this.appstate = new AppState();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uuid = params['sidebar'];
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
    jQuery("#accordion").accordion();
  }

  /*ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    this.sub = this.route.params.subscribe(params => {
      this.uuid = params['sidebar'];
      console.log("params: " + this.uuid);
      this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('/sidebar/' + this.uuid);
    });
  }*/

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchBookmarks(id) {
    console.log("fetching sidebar " + id);
    var db = new AWS.DynamoDB.DocumentClient();
    DynamoDBService.getBookmarks(id, this.bookmarks);
    console.log(this.bookmarks);
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
