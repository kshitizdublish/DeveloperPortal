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
    Headers,
    RequestOptions
} from '@angular/http';
import {
    OnInit
} from '@angular/core';

// import custom component
import {
    CustomEvents
} from './events/customevents';
import {
    environment
} from '../environments/environment';

export class AppConfigs {

    public static APP_VERSION = '1.0.0';
    public static tokenValue = '';

    public static get env(): any {
        return environment;
    }

    // store the authorization token
    public static set authToken(value: any) {
        localStorage.setItem(this.tokenValue, value);
    }
    public static get authToken(): any {
        return localStorage.getItem(this.tokenValue);
    }

}
