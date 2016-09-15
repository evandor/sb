webpackJsonp([2],{209:function(e,t,n){"use strict";var o=n(0),i=function(){function DynamoDBService(){}return DynamoDBService.getSidebars=function(e,t){function onQuery(e,n){e?console.error("Unable to query the table. Error JSON:",JSON.stringify(e,null,2)):(console.log("Query succeeded."),n.Items.forEach(function(e){console.log(e),t.push({sidebarName:e.sidebarName,uuid:e.uuid,userId:e.userId})}))}var n={TableName:"sidebar",KeyConditionExpression:"userId = :userId",ExpressionAttributeValues:{":userId":e}},o=new AWS.DynamoDB.DocumentClient;o.query(n,onQuery)},DynamoDBService.getBookmarks=function(e,t){function onQuery(e,n){e?console.error("Unable to query the table. Error JSON:",JSON.stringify(e,null,2)):(console.log("Query succeeded."),n.Items.forEach(function(e){console.log(e),t.push({sidebarName:e.sidebarName,uuid:e.uuid,userId:e.userId})}))}var n={TableName:"bookmark",KeyConditionExpression:"sidebarUUID = :sidebarUUID",ExpressionAttributeValues:{":sidebarUUID":e}},o=new AWS.DynamoDB.DocumentClient;o.query(n,onQuery)},DynamoDBService.writeLogEntry=function(e){var t=(new Date).toString();console.log("Writing log entry..type:"+e+" id: "+AWS.config.credentials.params.IdentityId+" date: "+t),DynamoDBService.write(AWS.config.credentials.params.IdentityId,t,e)},DynamoDBService.write=function(e,t,n){DynamoDBService.DDB=new AWS.DynamoDB({params:{TableName:"LoginTrail"}});var o={Item:{userId:{S:e},activityDate:{S:t},type:{S:n}}};DynamoDBService.DDB.putItem(o,function(e){})},DynamoDBService=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],DynamoDBService)}();t.DynamoDBService=i},241:function(e,t,n){"use strict";var o=n(65),i=n(0),a=[],s=function(e){return e};o.disableDebugTools(),i.enableProdMode(),a=a.slice(),t.decorateModuleRef=s,t.ENV_PROVIDERS=a.slice()},339:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(510))},340:function(e,t,n){"use strict";var o=n(0),i=function(){function AppState(){this._state={}}return Object.defineProperty(AppState.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(e){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),AppState.prototype.get=function(e){var t=this.state;return t.hasOwnProperty(e)?t[e]:t},AppState.prototype.set=function(e,t){return this._state[e]=t},AppState.prototype._clone=function(e){return JSON.parse(JSON.stringify(e))},AppState=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],AppState)}();t.AppState=i},341:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(516)),__export(n(517))},342:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(518))},343:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(523))},344:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(524)),__export(n(525))},392:function(e,t){e.exports="html,\nbody {\n    height: 100%;\n}\n\nbody {\n    margin: 0px;\n}\n\n.wrapper {\n    position: relative;\n    height: 100%;\n}\n\n.container-left {\n    position: relative;\n    /* Necessary to put this frame on top of the other */\n    z-index: 1;\n    width: 200px;\n    height: 100%;\n}\n\n.container-right {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    padding-left: 200px;\n    box-sizing: border-box;\n    height: 100%;\n}\n\niframe {\n    width: 100%;\n    height: 100%;\n}\n"},393:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(512))},510:function(e,t,n){"use strict";var o=n(0),i=n(58),a=function(){function About(e){this.route=e}return About.prototype.ngOnInit=function(){var e=this;this.route.data.subscribe(function(t){e.localState=t.yourData})},About.prototype.asyncDataWithWebpack=function(){},About=__decorate([o.Component({selector:"about",styles:["\n  "],template:"\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object])],About);var e}();t.About=a},511:function(e,t,n){"use strict";var o=n(0),i=function(){function App(){this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass"}return App.prototype.ngOnInit=function(){},App=__decorate([o.Component({selector:"app",encapsulation:o.ViewEncapsulation.None,styles:[n(692)],template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],App)}();t.App=i},512:function(e,t,n){"use strict";var o=n(0),i=n(65),a=n(190),s=n(154),r=n(58),c=n(107),u=n(241),d=n(514),p=n(511),l=n(513),f=n(340),g=n(342),m=n(339),h=n(341),v=n(344),b=n(343),y=n(521),S=l.APP_RESOLVER_PROVIDERS.concat([f.AppState]),_=function(){function AppModule(e,t){this.appRef=e,this.appState=t}return AppModule.prototype.hmrOnInit=function(e){e&&e.state&&(console.log("HMR store",e),this.appState._state=e.state,this.appRef.tick(),delete e.state)},AppModule.prototype.hmrOnDestroy=function(e){var t=this.appRef.components.map(function(e){return e.location.nativeElement}),n=this.appState._state;e.state=n,e.disposeOldHosts=c.createNewHosts(t),c.removeNgStyles()},AppModule.prototype.hmrAfterDestroy=function(e){e.disposeOldHosts(),delete e.disposeOldHosts},AppModule=__decorate([o.NgModule({bootstrap:[p.App],declarations:[p.App,m.About,h.Frames,h.Frames2,v.Sidebar,v.Sidebars,g.Home,b.NoContent,y.XLarge],imports:[i.BrowserModule,a.FormsModule,s.HttpModule,r.RouterModule.forRoot(d.ROUTES,{useHash:!1})],providers:[u.ENV_PROVIDERS,S]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ApplicationRef&&o.ApplicationRef)&&e||Object,"function"==typeof(t="undefined"!=typeof f.AppState&&f.AppState)&&t||Object])],AppModule);var e,t}();t.AppModule=_},513:function(e,t,n){"use strict";var o=n(0),i=n(12);n(677);var a=function(){function DataResolver(){}return DataResolver.prototype.resolve=function(e,t){return i.Observable.of({res:"I am data"})},DataResolver=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],DataResolver)}();t.DataResolver=a,t.APP_RESOLVER_PROVIDERS=[a]},514:function(e,t,n){"use strict";var o=n(342),i=n(339),a=n(341),s=n(344),r=n(343);t.ROUTES=[{path:"",component:a.Frames2},{path:"home",component:o.Home},{path:"about",component:i.About},{path:"frames",component:a.Frames},{path:"frames/:sidebar",component:a.Frames},{path:"frames2",component:a.Frames2},{path:"frames2/:sidebar",component:a.Frames2},{path:"sidebar",component:s.Sidebar},{path:"sidebar/:sidebar",component:s.Sidebar},{path:"sidebars",component:s.Sidebars},{path:"detail",loadChildren:function(){return n.e(0).then(n.bind(null,698)).then(function(e){return e.__esModule?e.default:e})}},{path:"**",component:r.NoContent}]},515:function(e,t){"use strict";var n=function(){function AppState(){this.state="inactive"}return AppState.prototype.toggleState=function(){"inactive"==this.state?this.state="active":this.state="inactive"},AppState}();t.AppState=n},516:function(e,t,n){"use strict";var o=n(0),i=n(58),a=n(65),s=function(){function Frames(e,t){this.route=e,this.domSanitizer=t,this.uuid="d56cc24e-6326-4d11-90f6-44c5c997f5c3"}return Frames.prototype.ngOnInit=function(){var e=this;this.route.data.subscribe(function(t){e.localState=t.yourData}),this.sub=this.route.params.subscribe(function(t){e.uuid=t.sidebar,console.log("params: "+e.uuid),e.url=e.domSanitizer.bypassSecurityTrustResourceUrl("/sidebar/"+e.uuid)})},Frames.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Frames=__decorate([o.Component({selector:"about",styles:[n(392)],template:n(668)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(t="undefined"!=typeof a.DomSanitizer&&a.DomSanitizer)&&t||Object])],Frames);var e,t}();t.Frames=s},517:function(e,t,n){"use strict";var o=n(0),i=n(58),a=n(65),s=n(209),r=n(515),c=function(){function Frames2(e,t,n){var o=this;this.route=e,this.domSanitizer=t,this._zone=n,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.uuid="d56cc24e-6326-4d11-90f6-44c5c997f5c3",this.bookmarks=[],this.onGoogleLoginSuccess=function(e){o._zone.run(function(){o.userAuthToken=e.getAuthResponse().id_token,o.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":o.userAuthToken}})}),o.fetchBookmarks("d56cc24e-6326-4d11-90f6-44c5c997f5c3")})},this.appstate=new r.AppState}return Frames2.prototype.ngOnInit=function(){var e=this;this.sub=this.route.params.subscribe(function(t){e.uuid=t.sidebar})},Frames2.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}}),jQuery("#accordion").accordion()},Frames2.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Frames2.prototype.fetchBookmarks=function(e){console.log("fetching sidebar "+e);new AWS.DynamoDB.DocumentClient;s.DynamoDBService.getBookmarks(e,this.bookmarks),console.log(this.bookmarks)},Frames2=__decorate([o.Component({selector:"frames2",styles:[n(392)],template:n(669),animations:[o.trigger("heroState",[o.state("inactive",o.style({backgroundColor:"#eee",width:"200px"})),o.state("active",o.style({backgroundColor:"white",width:"400%"})),o.transition("inactive => active",o.animate("200ms ease-in")),o.transition("active => inactive",o.animate("200ms ease-out"))])]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(t="undefined"!=typeof a.DomSanitizer&&a.DomSanitizer)&&t||Object,"function"==typeof(c="undefined"!=typeof o.NgZone&&o.NgZone)&&c||Object])],Frames2);var e,t,c}();t.Frames2=c},518:function(e,t,n){"use strict";var o=n(0),i=n(340),a=n(519),s=function(){function Home(e,t){this.appState=e,this.title=t,this.localState={value:""}}return Home.prototype.ngOnInit=function(){},Home.prototype.submitState=function(e){console.log("submitState",e),this.appState.set("value",e),this.localState.value=""},Home=__decorate([o.Component({selector:"home",providers:[a.Title],styles:[n(693)],template:n(670)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.AppState&&i.AppState)&&e||Object,"function"==typeof(t="undefined"!=typeof a.Title&&a.Title)&&t||Object])],Home);var e,t}();t.Home=s},519:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(520))},520:function(e,t,n){"use strict";var o=n(0),i=n(154),a=function(){function Title(e){this.http=e,this.value="Angular 2"}return Title.prototype.getData=function(){return console.log("Title#getData(): Get Data"),{value:"AngularClass"}},Title=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Http&&i.Http)&&e||Object])],Title);var e}();t.Title=a},521:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(522))},522:function(e,t,n){"use strict";var o=n(0),i=function(){function XLarge(e,t){t.setElementStyle(e.nativeElement,"fontSize","x-large")}return XLarge=__decorate([o.Directive({selector:"[x-large]"}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ElementRef&&o.ElementRef)&&e||Object,"function"==typeof(t="undefined"!=typeof o.Renderer&&o.Renderer)&&t||Object])],XLarge);var e,t}();t.XLarge=i},523:function(e,t,n){"use strict";var o=n(0),i=function(){function NoContent(){}return NoContent=__decorate([o.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],NoContent)}();t.NoContent=i},524:function(e,t,n){"use strict";var o=n(0),i=n(58),a=n(209),s=function(){function Sidebar(e,t){var n=this;this.route=e,this._zone=t,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.uuid="undef",this.bookmarks=[],this.onGoogleLoginSuccess=function(e){n._zone.run(function(){n.userAuthToken=e.getAuthResponse().id_token,n.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":n.userAuthToken}})}),n.fetchBookmarks("d56cc24e-6326-4d11-90f6-44c5c997f5c3")})}}return Sidebar.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}}),jQuery("#accordion").accordion()},Sidebar.prototype.fetchBookmarks=function(e){console.log("fetching sidebar "+e);new AWS.DynamoDB.DocumentClient;a.DynamoDBService.getBookmarks(e,this.bookmarks),console.log(this.bookmarks)},Sidebar.prototype.ngOnInit=function(){var e=this;this.sub=this.route.params.subscribe(function(t){e.uuid=t.sidebar})},Sidebar.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},Sidebar=__decorate([o.Component({selector:"about",template:n(671)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(t="undefined"!=typeof o.NgZone&&o.NgZone)&&t||Object])],Sidebar);var e,t}();t.Sidebar=s},525:function(e,t,n){"use strict";var o=n(0),i=n(58),a=n(209),s=function(){function Sidebars(e,t){var n=this;this.route=e,this._zone=t,this.googleLoginButtonId="google-login-button",this.userDisplayName="empty",this.userAuthToken=null,this.sidebars=[],this.onGoogleLoginSuccess=function(e){n._zone.run(function(){n.userAuthToken=e.getAuthResponse().id_token,n.userDisplayName=e.getBasicProfile().getName(),AWS.config.update({region:"us-east-1",credentials:new AWS.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:88e07f6a-eb58-4b3a-aa93-a45a7a1d5edd",Logins:{"accounts.google.com":n.userAuthToken}})}),n.fetchSidebars("us-east-1:129ab219-08ca-4561-946f-938cb4027fb1")})}}return Sidebars.prototype.ngOnInit=function(){},Sidebars.prototype.ngAfterViewInit=function(){gapi.signin2.render(this.googleLoginButtonId,{onsuccess:this.onGoogleLoginSuccess,scope:"profile",theme:"dark",onfailure:function(e){console.log("error:"+e)}})},Sidebars.prototype.fetchSidebars=function(e){var t=new AWS.DynamoDB.DocumentClient;console.log(t);a.DynamoDBService.getSidebars(e,this.sidebars)},Sidebars=__decorate([o.Component({selector:"about",template:n(672)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&e||Object,"function"==typeof(t="undefined"!=typeof o.NgZone&&o.NgZone)&&t||Object])],Sidebars);var e,t}();t.Sidebars=s},668:function(e,t){e.exports='<div class=\'wrapper\'>\n    <div class=\'container-left\'>\n        <iframe [src]="url" id="sidebar" name="sidebar" style="height: 100%; border:none; border-right: 1px dashed gray;"></iframe>\n    </div>\n    <div class=\'container-right\'>\n        <iframe [routerLink]="[\'/sidebars\']" id="content" name="content" style="height: 100%; border: none"></iframe>\n    </div>\n</div>'},669:function(e,t){e.exports='<div class=\'wrapper\'>\n    <div class=\'container-left\'>\n        <div [@heroState]="appstate.state" style="height: 100%; border:none; border-right: 1px dashed gray;">\n            <ul>\n                <li  (click)="appstate.toggleState()">test</li>\n            </ul>\n            <fieldset>\n                <input type="text" title="search" size="6" class="text-input" id="filter" value="" />\n                <span id="filter-count"></span>\n            </fieldset>\n\n\n            <div id="accordion">\n                <h3>Manage Sidebars</h3>\n                <div>\n                    <div>\n                        <a href="/sidebars" target="content">switch sidebar</a>\n                    </div>\n                </div>\n                <h3>Section 3</h3>\n                <div>\n                    <div><a href="http://www.spiegel.de" target="content">Spiegel</a></div>\n                </div>\n                <h3>Section 4</h3>\n                <div>\n                    <p>\n                        Cras dictum.\n                    </p>\n                    <p>\n                        Suspendisse eu nisl.\n                    </p>\n                </div>\n            </div>\n\n            <div id="targettitle"></div>\n            <!--<div>\n    <span class="g-sig nin2" data-onsuccess="google SignIn"></span>\n    <a href="#" onclick="signOut();">Sign out</a>\n</div>-->\n\n            <div class="login-wrapper">\n                <div id="{{googleLoginButtonId}}"></div>\n            </div>\n            <div class="main-application">\n                <p>Logged in as {{userDisplayName}}!</p>\n                <p><a href="#" onclick="signOut();" target="_top">Sign out</a></p>\n            </div>\n\n            <a href="/" target="_top">home</a>\n\n            <div>{{uuid}}</div>\n\n            <!--<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<! -- sidebar -- >\n<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1335741973265162" data-ad-slot="6126510968" data-ad-format="auto"></ins>\n<script>\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  </script>-->\n        </div>\n    </div>\n    <div class=\'container-right\'>\n        <!--<iframe src="/sidebars" id="content" name="content" style="height: 100%; border: none"></iframe>-->\n        <iframe src="/assets/static/index.html" id="content" name="content" style="height: 100%; border: none"></iframe>\n        \n    </div>\n</div>'},670:function(e,t){e.exports='<nav>\n  <span>\n        <a [routerLink]=" [\'/\'] ">\n          Index\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/home\'] ">\n          Home\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/detail\'] ">\n          Detail\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/about\'] ">\n          About\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/sidebars\'] ">\n          Sidebars\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/sidebar\'] ">\n          Sidebar\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/frames\'] ">\n          Frames\n        </a>\n      </span> |\n  <span>\n        <a [routerLink]=" [\'/frames2\'] ">\n          Frames2\n        </a>\n      </span>\n</nav>\n\n\n<div class="card-container">\n  <h1 x-large class="sample-content">Your Content Here</h1>\n\n  <div>\n    For material design components use the <a href="https://github.com/AngularClass/angular2-webpack-starter/tree/material2"><b>material2</b></a>    branch\n  </div>\n\n  <hr>\n\n  <div>\n    For hot module reloading run\n    <pre>npm run start:hmr</pre>\n  </div>\n\n  <hr>\n\n  <div>\n    <h4>Local State</h4>\n\n    <form (ngSubmit)="submitState(localState.value)" autocomplete="off">\n\n      <input [value]="localState.value" (input)="localState.value = $event.target.value" placeholder="Submit Local State to App State"\n        autofocus>\n\n      <button md-raised-button color="primary">Submit Value</button>\n    </form>\n    <!--\n        <input type="text" [value]="localState.value" (input)="localState.value = $event.target.value" autofocus>\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\n        we can use Angular\'s [(ngModel)] syntax\n        <input type="text" name="textInput" [(ngModel)]="localState.value" autofocus>\n      -->\n\n    <pre>this.localState = {{ localState | json }}</pre>\n\n  </div>\n\n</div>'},671:function(e,t){e.exports='<fieldset>\n    <input type="text" title="search" size="6" class="text-input" id="filter" value="" />\n    <span id="filter-count"></span>\n</fieldset>\n\n\n<div id="accordion">\n    <h3>Manage Sidebars</h3>\n    <div>\n        <div>\n            <a href="/sidebars" target="content">switch sidebar</a>\n        </div>\n    </div>\n    <h3>Section 3</h3>\n    <div>\n        <div><a href="http://www.spiegel.de" target="content">Spiegel</a></div>\n    </div>\n    <h3>Section 4</h3>\n    <div>\n        <p>\n            Cras dictum.\n        </p>\n        <p>\n            Suspendisse eu nisl.\n        </p>\n    </div>\n</div>\n\n<div id="targettitle"></div>\n<!--<div>\n    <span class="g-sig nin2" data-onsuccess="google SignIn"></span>\n    <a href="#" onclick="signOut();">Sign out</a>\n</div>-->\n\n<div class="login-wrapper">\n    <div id="{{googleLoginButtonId}}"></div>\n</div>\n<div class="main-application">\n    <p>Logged in as {{userDisplayName}}!</p>\n    <p><a href="#" onclick="signOut();" target="_top">Sign out</a></p>\n</div>\n\n<a href="/" target="_top">home</a>\n\n<div>{{uuid}}</div>\n\n<!--<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<! -- sidebar -- >\n<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1335741973265162" data-ad-slot="6126510968" data-ad-format="auto"></ins>\n<script>\n    (adsbygoogle = window.adsbygoogle || []).push({});\n  </script>-->'},672:function(e,t){e.exports='<div style="float: right;">\n  <span class="g-signin2" data-onsuccess="googleSignIn"></span>\n</div>\n<br><br>\n<div class="container">\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <h1>Your sidebars</h1>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <div *ngFor="let sidebar of sidebars">\n        <a [routerLink]="[\'/frames\',sidebar.uuid]" target="_top">{{sidebar.sidebarName}}</a>\n      </div>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <hr>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n\n  <div class="row">\n    <div class="one column">&nbsp;</div>\n    <div class="ten columns">\n      <form>\n        <div class="row">\n          <div class="six columns">\n            <label for="newSidebarName">Name</label>\n            <input class="u-full-width" placeholder="new sidebars\' name" id="newSidebarName" type="text">\n          </div>\n          <div class="six columns">\n            <label for="exampleRecipientInput">Type</label>\n            <select class="u-full-width" id="exampleRecipientInput">\n                <option value="Option 1">not used yet</option>\n                <option value="Option 2">not used yet</option>\n              </select>\n          </div>\n        </div>\n        <label for="newSidebarDesc">Description</label>\n        <textarea class="u-full-width" placeholder="Optional" id="newSidebarDesc"></textarea>\n        <button class="button-primary" id="new-sidebar-btn">Submit</button>\n      </form>\n    </div>\n    <div class="one column">&nbsp;</div>\n  </div>\n</div>\n\n<div class="login-wrapper">\n  <div id="{{googleLoginButtonId}}"></div>\n</div>\n<div class="main-application">\n  <p>Logged in as {{userDisplayName}}!</p>\n  <p><a href="#" onclick="signOut();">Sign out</a></p>\n</div>'},677:function(e,t,n){"use strict";var o=n(12),i=n(85);o.Observable.of=i.of},692:function(e,t){e.exports="html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n"},693:function(e,t){e.exports="/*styles for home content only*/"},695:function(e,t,n){"use strict";function main(){return o.platformBrowserDynamic().bootstrapModule(s.AppModule).then(function(e){return e}).then(i.decorateModuleRef).catch(function(e){return console.error(e)})}var o=n(155),i=n(241),a=n(107),s=n(393);t.main=main,a.bootloader(main)}},[695]);