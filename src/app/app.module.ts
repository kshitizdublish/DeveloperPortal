/*****************************************************************
* Proprietary & Confidential | © 2017 PhaseZero Ventures LLC *
* This is part of PhaseZero Ventures LLC and cannot be copied, *
* modified and/or distributed without the express permission of *
* PhaseZero Ventures LLC *
*****************************************************************/
/**
* @author: Kshitiz Dublish
*/

// import core module
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    CoreModule
} from './core/core.module';
import {
    FormBuilder,
    FormsModule
} from '@angular/forms';
import {
    NgModule,
    APP_INITIALIZER
} from '@angular/core';
import {
    Http
} from '@angular/http';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
    TranslateModule,
    TranslateLoader,
    TranslateStaticLoader
} from 'ng2-translate';
import {
    TooltipModule
} from 'ngx-bootstrap/tooltip';
// import custom module
import {
    AppRoutingModule
} from './app-routing.module';
import {
    DocumentationModule
} from './components/api-documentation/documentation.module';

// import custom component
import {
    AlertComponent
} from './components/alert/alert.component';
import {
    AppComponent
} from './app.component';
import {
    ApiKeyComponent
} from './components/api-key/api-key.component';
import {
    CustomEvents
} from './events/customevents';
import {
    FooterComponent
} from './components/footer/footer.component';
import {
    HeaderComponent
} from './components/header/header.component';
import {
    HttpInterceptorClass
} from './common/httpInterceptor';
import {
    LoaderComponent
} from './components/loader/loader.component';
import {
    LoginComponent
} from './login/login.component';
import {
    LoginBannerComponent
} from './components/login-banner/login-banner.component';
import {
    RestClientComponent
} from './components/rest-client/rest-client.component';

// import custom service
import {
    AppLoadService
} from './services/application_init';
import {
    AuthService
} from './components/authorization/auth.service';

@NgModule({
    declarations: [
        AlertComponent,
        ApiKeyComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        LoaderComponent,
        LoginComponent,
        LoginBannerComponent,
        RestClientComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        DocumentationModule,
        FormsModule,
        HttpClientModule,
        TooltipModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (httpFactory),
            deps: [Http]
        })
    ],
    providers: [
        AppLoadService,
        {
            provide: APP_INITIALIZER,
            useFactory: getAppConfig,
            deps: [AppLoadService],
            multi: true
        },
        AuthService,
        CustomEvents,
        FormBuilder,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorClass,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// get the appconfig before initializing the application
export function getAppConfig(appLoadService: AppLoadService) {
    return () => appLoadService.getAppSettings();
}

export function httpFactory(http: Http): any {
    return new TranslateStaticLoader(http, './locale/i18n', '.json');
}
