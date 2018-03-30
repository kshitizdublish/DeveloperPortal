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
    Component,
    ChangeDetectorRef,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    Subscription
} from 'rxjs/Subscription';
import {
    TranslateService
} from 'ng2-translate';

// import custom component
import {
    AppConfigs
} from './app.config';
import {
    CustomEvents
} from './events/customevents';

// import custom service
import {
    ApiDispatcherService
} from './core/api-dispatcher/api-dispatcher.service';

@Component({
    selector: 'pzv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'pzv';
    userLoggedIn = false;
    private currentURL = '';

    private langChangeSub: Subscription;
    private loginSuccessSub: Subscription;

    constructor(
        private _apiDispatcherService: ApiDispatcherService,
        private _customEvents: CustomEvents,
        private _ref: ChangeDetectorRef,
        private _router: Router,
        private translate: TranslateService
    ) {
        console.log('Build Version:- ' + AppConfigs.APP_VERSION);
        console.log('Environment :- ' + AppConfigs.env.name);
        translate.addLangs(['en_US', 'zh']);
        // set the default language for the Application
        translate.setDefaultLang('en_US');

        /*
        * show/hide Development Portal banner
        * if valid auth token exists and
		* based on userLoggedIn value
		*/
        if (AppConfigs.authToken !== '') {
            this.userLoggedIn = true;
        }
        // will listen the login and logout events
        this.loginSuccessSub = this._customEvents.loginSuccess.subscribe((userLoggedIn: boolean) => {
            this.userLoggedIn = userLoggedIn;
            if (!userLoggedIn) {
                AppConfigs.authToken = '';
                this._router.navigate(['/']);
            }
        });

        // listen the language change event for the application
        this.langChangeSub = this._customEvents.langChangeEvt.subscribe((value: any) => {
            this.translate.use(value.lang);
        });
    }

    ngOnInit() { }

    ngOnDestroy = () => {
        // called once, before the instance is destroyed.
        if (this.langChangeSub) { this.langChangeSub.unsubscribe(); }
        if (this.loginSuccessSub) { this.loginSuccessSub.unsubscribe(); }
    }
}
