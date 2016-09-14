webpackJsonp([2],{209:function(e,n,t){"use strict";var o=t(0),i=function(){function DynamoDBService(){}return DynamoDBService.getSidebars=function(e,n){function onQuery(e,t){e?console.error("Unable to query the table. Error JSON:",JSON.stringify(e,null,2)):(console.log("Query succeeded."),t.Items.forEach(function(e){console.log(e),n.push({sidebarName:e.sidebarName,uuid:e.uuid,userId:e.userId})}))}var t={TableName:"sidebar",KeyConditionExpression:"userId = :userId",ExpressionAttributeValues:{":userId":e}},o=new AWS.DynamoDB.DocumentClient;o.query(t,onQuery)},DynamoDBService.getBookmarks=function(e,n){function onQuery(e,t){e?console.error("Unable to query the table. Error JSON:",JSON.stringify(e,null,2)):(console.log("Query succeeded."),t.Items.forEach(function(e){console.log(e),n.push({sidebarName:e.sidebarName,uuid:e.uuid,userId:e.userId})}))}var t={TableName:"bookmark",KeyConditionExpression:"sidebarUUID = :sidebarUUID",ExpressionAttributeValues:{":sidebarUUID":e}},o=new AWS.DynamoDB.DocumentClient;o.query(t,onQuery)},DynamoDBService.writeLogEntry=function(e){var n=(new Date).toString();console.log("Writing log entry..type:"+e+" id: "+AWS.config.credentials.params.IdentityId+" date: "+n),DynamoDBService.write(AWS.config.credentials.params.IdentityId,n,e)},DynamoDBService.write=function(e,n,t){DynamoDBService.DDB=new AWS.DynamoDB({params:{TableName:"LoginTrail"}});var o={Item:{userId:{S:e},activityDate:{S:n},type:{S:t}}};DynamoDBService.DDB.putItem(o,function(e){})},DynamoDBService=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],DynamoDBService)}();n.DynamoDBService=i},241:function(e,n,t){"use strict";var o=t(65),i=t(0),a=[],s=function(e){return e};o.disableDebugTools(),i.enableProdMode(),a=a.slice(),n.decorateModuleRef=s,n.ENV_PROVIDERS=a.slice()},339:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(510))},340:function(e,n,t){"use strict";var o=t(0),i=function(){function AppState(){this._state={}}return Object.defineProperty(AppState.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(e){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),AppState.prototype.get=function(e){var n=this.state;return n.hasOwnProperty(e)?n[e]:n},AppState.prototype.set=function(e,n){return this._state[e]=n},AppState.prototype._clone=function(e){return JSON.parse(JSON.stringify(e))},AppState=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],AppState)}();n.AppState=i},341:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(515)),__export(t(516))},342:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(517))},343:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(522))},344:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(523)),__export(t(524))},392:function(e,n){e.exports="html,\nbody {\n    height: 100%;\n}\n\nbody {\n    margin: 0px;\n}\n\n.wrapper {\n    position: relative;\n    height: 100%;\n}\n\n.container-left {\n    position: relative;\n    /* Necessary to put this frame on top of the other */\n    z-index: 1;\n    width: 200px;\n    height: 100%;\n}\n\n.container-right {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    padding-left: 200px;\n    box-sizing: border-box;\n    height: 100%;\n}\n\niframe {\n    width: 100%;\n    height: 100%;\n}\n"},393:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(512))},510:function(e,n,t){"use strict";var o=t(0),i=t(58),a=function(){function About(e){this.route=e}return About.prototype.ngOnInit=function(){var e=this;this.route.data.subscribe(function(n){e.localState=n.yourData})},About.prototype.asyncDataWithWebpack=function(){},About=__decorate([o.Component({selector:"about",styles:["\n  "],template:"\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object])],About);var e}();n.About=a},511:function(e,n,t){"use strict";var o=t(0),i=function(){function App(){this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass"}return App.prototype.ngOnInit=function(){},App=__decorate([o.Component({selector:"app",encapsulation:o.ViewEncapsulation.None,styles:[t(691)],template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],App)}();n.App=i},512:function(e,n,t){"use strict";var o=t(0),i=t(65),a=t(190),s=t(154),r=t(58),u=t(107),c=t(241),d=t(514),p=t(511),l=t(513),f=t(340),g=t(342),m=t(339),h=t(341),v=t(344),b=t(343),y=t(520),S=l.APP_RESOLVER_PROVIDERS.concat([f.AppState]),_=function(){function AppModule(e,n){this.appRef=e,this.appState=n}return AppModule.prototype.hmrOnInit=function(e){e&&e.state&&(console.log("HMR store",e),this.appState._state=e.state,this.appRef.tick(),delete e.state)},AppModule.prototype.hmrOnDestroy=function(e){var n=this.appRef.components.map(function(e){return e.location.nativeElement}),t=this.appState._state;e.state=t,e.disposeOldHosts=u.createNewHosts(n),u.removeNgStyles()},AppModule.prototype.hmrAfterDestroy=function(e){e.disposeOldHosts(),delete e.disposeOldHosts},AppModule=__decorate([o.NgModule({bootstrap:[p.App],declarations:[p.App,m.About,h.Frames,h.Frames2,v.Sidebar,v.Sidebars,g.Home,b.NoContent,y.XLarge],imports:[i.BrowserModule,a.FormsModule,s.HttpModule,r.RouterModule.forRoot(d.ROUTES,{useHash:!1})],providers:[c.ENV_PROVIDERS,S]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ApplicationRef&&o.ApplicationRef)&&e||Object,"function"==typeof(n="undefined"!=typeof f.AppState&&f.AppState)&&n||Object])],AppModule);var e,n}();n.AppModule=_},513:function(e,n,t){"use strict";var o=t(0),i=t(12);t(676);var a=function(){function DataResolver(){}return DataResolver.prototype.resolve=function(e,n){return i.Observable.of({res:"I am data"})},DataResolver=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],DataResolver)}();n.DataResolver=a,n.APP_RESOLVER_PROVIDERS=[a]},514:function(e,n,t){"use strict";var o=t(342),i=t(339),a=t(341),s=t(344),r=t(343);n.ROUTES=[{path:"",component:o.Home},{path:"home",component:o.Home},{path:"about",component:i.About},{path:"frames",component:a.Frames},{path:"frames/:sidebar",component:a.Frames},{path:"frames2",component:a.Frames2},{path:"frames2/:sidebar",component:a.Frames2},{path:"sidebar",component:s.Sidebar},{path:"sidebar/:sidebar",component:s.Sidebar},{path:"sidebars",component:s.Sidebars},{path:"detail",loadChildren:function(){return t.e(0).then(t.bind(null,697)).then(function(e){return e.__esModule?e.default:e})}},{path:"**",component:r.NoContent}]},515:function(e,n,t){"use strict";var o=t(0),i=t(58),a=t(65),s=function(){function Frames(e,n){this.route=e,this.domSanitizer=n,this.uuid="d56cc24e-6326-4d11-90f6-44c5c997f5c3"}return Frames.prototype.ngOnInit=function(){var e=this;this.route.data.subscribe(function(n){e.localState=n.yourData}),this.sub=this.route.params.subscribe(function(n){e.uuid=n.sidebar,console.log("params: "+e.uuid),e.url=e.domSanitizer.bypassSecurityTrustResourceUrl("/sidebar/"+e.uuid)})},Frames.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Frames=__decorate([o.Component({selector:"about",styles:[t(392)],template:t(667)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(n="undefined"!=typeof a.DomSanitizer&&a.DomSanitizer)&&n||Object])],Frames);var e,n}();n.Frames=s},516:function(e,n,t){"use strict";var o=t(0),i=t(58),a=t(65),s=t(209),r=function(){function Frames2(e,n,t){var o=this;this.route=e,this.domSanitizer=n,this._zone=t,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.uuid="d56cc24e-6326-4d11-90f6-44c5c997f5c3",this.bookmarks=[],this.onGoogleLoginSuccess=function(e){o._zone.run(function(){o.userAuthToken=e.getAuthResponse().id_token,o.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":o.userAuthToken}})}),o.fetchBookmarks("d56cc24e-6326-4d11-90f6-44c5c997f5c3")})}}return Frames2.prototype.ngOnInit=function(){var e=this;this.sub=this.route.params.subscribe(function(n){e.uuid=n.sidebar})},Frames2.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}}),jQuery("#accordion").accordion()},Frames2.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Frames2.prototype.fetchBookmarks=function(e){console.log("fetching sidebar "+e);new AWS.DynamoDB.DocumentClient;s.DynamoDBService.getBookmarks(e,this.bookmarks),console.log(this.bookmarks)},Frames2=__decorate([o.Component({selector:"frames2",styles:[t(392)],template:t(668)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(n="undefined"!=typeof a.DomSanitizer&&a.DomSanitizer)&&n||Object,"function"==typeof(r="undefined"!=typeof o.NgZone&&o.NgZone)&&r||Object])],Frames2);var e,n,r}();n.Frames2=r},517:function(e,n,t){"use strict";var o=t(0),i=t(340),a=t(518),s=function(){function Home(e,n){this.appState=e,this.title=n,this.localState={value:""}}return Home.prototype.ngOnInit=function(){},Home.prototype.submitState=function(e){console.log("submitState",e),this.appState.set("value",e),this.localState.value=""},Home=__decorate([o.Component({selector:"home",providers:[a.Title],styles:[t(692)],template:t(669)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.AppState&&i.AppState)&&e||Object,"function"==typeof(n="undefined"!=typeof a.Title&&a.Title)&&n||Object])],Home);var e,n}();n.Home=s},518:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(519))},519:function(e,n,t){"use strict";var o=t(0),i=t(154),a=function(){function Title(e){this.http=e,this.value="Angular 2"}return Title.prototype.getData=function(){return console.log("Title#getData(): Get Data"),{value:"AngularClass"}},Title=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Http&&i.Http)&&e||Object])],Title);var e}();n.Title=a},520:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(521))},521:function(e,n,t){"use strict";var o=t(0),i=function(){function XLarge(e,n){n.setElementStyle(e.nativeElement,"fontSize","x-large")}return XLarge=__decorate([o.Directive({selector:"[x-large]"}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ElementRef&&o.ElementRef)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Renderer&&o.Renderer)&&n||Object])],XLarge);var e,n}();n.XLarge=i},522:function(e,n,t){"use strict";var o=t(0),i=function(){function NoContent(){}return NoContent=__decorate([o.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],NoContent)}();n.NoContent=i},523:function(e,n,t){"use strict";var o=t(0),i=t(58),a=t(209),s=function(){function Sidebar(e,n){var t=this;this.route=e,this._zone=n,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.uuid="undef",this.bookmarks=[],this.onGoogleLoginSuccess=function(e){t._zone.run(function(){t.userAuthToken=e.getAuthResponse().id_token,t.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":t.userAuthToken}})}),t.fetchBookmarks("d56cc24e-6326-4d11-90f6-44c5c997f5c3")})}}return Sidebar.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}}),jQuery("#accordion").accordion()},Sidebar.prototype.fetchBookmarks=function(e){console.log("fetching sidebar "+e);new AWS.DynamoDB.DocumentClient;a.DynamoDBService.getBookmarks(e,this.bookmarks),console.log(this.bookmarks)},Sidebar.prototype.ngOnInit=function(){var e=this;this.sub=this.route.params.subscribe(function(n){e.uuid=n.sidebar})},Sidebar.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Sidebar=__decorate([o.Component({selector:"about",template:t(670)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(n="undefined"!=typeof o.NgZone&&o.NgZone)&&n||Object])],Sidebar);var e,n}();n.Sidebar=s},524:function(e,n,t){"use strict";var o=t(0),i=t(58),a=t(209),s=function(){function Sidebars(e,n){var t=this;this.route=e,this._zone=n,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.sidebars=[],this.onGoogleLoginSuccess=function(e){t._zone.run(function(){t.userAuthToken=e.getAuthResponse().id_token,t.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":t.userAuthToken}})}),t.fetchSidebars("us-east-1:129ab219-08ca-4561-946f-938cb4027fb1")})}}return Sidebars.prototype.ngOnInit=function(){},Sidebars.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}})},Sidebars.prototype.fetchSidebars=function(e){var n=new AWS.DynamoDB.DocumentClient;console.log(n);a.DynamoDBService.getSidebars(e,this.sidebars)},Sidebars=__decorate([o.Component({selector:"about",template:t(671)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(n="undefined"!=typeof o.NgZone&&o.NgZone)&&n||Object])],Sidebars);var e,n}();n.Sidebars=s},667:function(e,n){e.exports='<div class=\'wrapper\'>\n    <div class=\'container-left\'>\n        <iframe [src]="url" id="sidebar" name="sidebar" style="height: 100%; border:none; border-right: 1px dashed gray;"></iframe>\n    </div>\n    <div class=\'container-right\'>\n        <iframe [routerLink]="[\'/sidebars\']" id="content" name="content" style="height: 100%; border: none"></iframe>\n    </div>\n</div>'},668:function(e,n){e.exports='<div class=\'wrapper\'>\n    <div class=\'container-left\'>\n        <div style="height: 100%; border:none; border-right: 1px dashed gray;">\n            <fieldset>\n                <input type="text" title="search" size="6" class="text-input" id="filter" value="" />\n                <span id="filter-count"></span>\n            </fieldset>\n\n\n            <div id="accordion">\n                <h3>Manage Sidebars</h3>\n                <div>\n                    <div>\n                        <a href="/sidebars" target="content">switch sidebar</a>\n                    </div>\n                </div>\n                <h3>Section 3</h3>\n                <div>\n                    <div><a href="http://www.spiegel.de" target="content">Spiegel</a></div>\n                </div>\n                <h3>Section 4</h3>\n                <div>\n                    <p>\n                        Cras dictum.\n                    </p>\n                    <p>\n                        Suspendisse eu nisl.\n                    </p>\n                </div>\n            </div>\n\n            <div id="targettitle"></div>\n            <!--<div>\n    <span class="g-sig nin2" data-onsuccess="google SignIn"></span>\n    <a href="#" onclick="signOut();">Sign out</a>\n</div>-->\n\n            <div class="login-wrapper">\n                <div id="{{googleLoginButtonId}}"></div>\n            </div>\n            <div class="main-application">\n                <p>Logged in as {{userDisplayName}}!</p>\n                <p><a href="#" onclick="signOut();" target="_top">Sign out</a></p>\n            </div>\n\n            <a href="/" target="_top">home</a>\n\n            <div>{{uuid}}</div>\n\n            <!--<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<! -- sidebar -- >\n<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1335741973265162" data-ad-slot="6126510968" data-ad-format="auto"></ins>\n<script>\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  </script>-->\n        </div>\n    </div>\n    <div class=\'container-right\'>\n        <iframe src="/sidebars" id="content" name="content" style="height: 100%; border: none"></iframe>\n    </div>\n</div>'},669:function(e,n){e.exports='<nav>\n  <span>\n        <a [routerLink]=" [\'/\'] ">\n          Index\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/home\'] ">\n          Home\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/detail\'] ">\n          Detail\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/about\'] ">\n          About\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/sidebars\'] ">\n          Sidebars\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/sidebar\'] ">\n          Sidebar\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/frames\'] ">\n          Frames\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/frames2\'] ">\n          Frames2\n        </a>\n      </span>\n</nav>\n\n\n<div class="card-container">\n  <h1 x-large class="sample-content">Your Content Here</h1>\n\n  <div>\n    For material design components use the <a href="https://github.com/AngularClass/angular2-webpack-starter/tree/material2"><b>material2</b></a>    branch\n  </div>\n\n  <hr>\n\n  <div>\n    For hot module reloading run\n    <pre>npm run start:hmr</pre>\n  </div>\n\n  <hr>\n\n  <div>\n    <h4>Local State</h4>\n\n    <form (ngSubmit)="submitState(localState.value)" autocomplete="off">\n\n      <input [value]="localState.value" (input)="localState.value = $event.target.value" placeholder="Submit Local State to App State"\n        autofocus>\n\n      <button md-raised-button color="primary">Submit Value</button>\n    </form>\n    <!--\n        <input type="text" [value]="localState.value" (input)="localState.value = $event.target.value" autofocus>\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\n        we can use Angular\'s [(ngModel)] syntax\n        <input type="text" name="textInput" [(ngModel)]="localState.value" autofocus>\n      -->\n\n    <pre>this.localState = {{ localState | json }}</pre>\n\n  </div>\n\n</div>'},670:function(e,n){e.exports='<fieldset>\n    <input type="text" title="search" size="6" class="text-input" id="filter" value="" />\n    <span id="filter-count"></span>\n</fieldset>\n\n\n<div id="accordion">\n    <h3>Manage Sidebars</h3>\n    <div>\n        <div>\n            <a href="/sidebars" target="content">switch sidebar</a>\n        </div>\n    </div>\n    <h3>Section 3</h3>\n    <div>\n        <div><a href="http://www.spiegel.de" target="content">Spiegel</a></div>\n    </div>\n    <h3>Section 4</h3>\n    <div>\n        <p>\n            Cras dictum.\n        </p>\n        <p>\n            Suspendisse eu nisl.\n        </p>\n    </div>\n</div>\n\n<div id="targettitle"></div>\n<!--<div>\n    <span class="g-sig nin2" data-onsuccess="google SignIn"></span>\n    <a href="#" onclick="signOut();">Sign out</a>\n</div>-->\n\n<div class="login-wrapper">\n    <div id="{{googleLoginButtonId}}"></div>\n</div>\n<div class="main-application">\n    <p>Logged in as {{userDisplayName}}!</p>\n    <p><a href="#" onclick="signOut();" target="_top">Sign out</a></p>\n</div>\n\n<a href="/" target="_top">home</a>\n\n<div>{{uuid}}</div>\n\n<!--<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<! -- sidebar -- >\n<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1335741973265162" data-ad-slot="6126510968" data-ad-format="auto"></ins>\n<script>\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  </script>-->'},671:function(e,n){e.exports='<div style="float: right;">\n  <span class="g-signin2" data-onsuccess="googleSignIn"></span>\n</div>\n<br><br>\n<div class="container">\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <h1>Your sidebars</h1>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <div *ngFor="let sidebar of sidebars">\n        <a [routerLink]="[\'/frames\',sidebar.uuid]" target="_top">{{sidebar.sidebarName}}</a>\n      </div>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <hr>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <form>\n        <div class="row">\n          <div class="six columns">\n            <label for="newSidebarName">Name</label>\n            <input class="u-full-width" placeholder="new sidebars\' name" id="newSidebarName" type="text">\n          </div>\n          <div class="six columns">\n            <label for="exampleRecipientInput">Type</label>\n            <select class="u-full-width" id="exampleRecipientInput">\n                <option value="Option 1">not used yet</option>\n                <option value="Option 2">not used yet</option>\n              </select>\n          </div>\n        </div>\n        <label for="newSidebarDesc">Description</label>\n        <textarea class="u-full-width" placeholder="Optional" id="newSidebarDesc"></textarea>\n        <button class="button-primary" id="new-sidebar-btn">Submit</button>\n      </form>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n</div>\n\n<div class="login-wrapper">\n  <div id="{{googleLoginButtonId}}"></div>\n</div>\n<div class="main-application">\n  <p>Logged in as {{userDisplayName}}!</p>\n  <p><a href="#" onclick="signOut();">Sign out</a></p>\n</div>'},676:function(e,n,t){"use strict";var o=t(12),i=t(85);o.Observable.of=i.of},691:function(e,n){e.exports="html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n"},692:function(e,n){e.exports="/*styles for home content only*/"},694:function(e,n,t){"use strict";function main(){return o.platformBrowserDynamic().bootstrapModule(s.AppModule).then(function(e){return e}).then(i.decorateModuleRef).catch(function(e){return console.error(e)})}var o=t(155),i=t(241),a=t(107),s=t(393);n.main=main,a.bootloader(main)}},[694]);