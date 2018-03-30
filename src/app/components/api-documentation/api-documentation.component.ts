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
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    Router
} from '@angular/router';

// import custom component
import {
    ApiLinksComponent
} from '../api-links/api-links.component';
import {
    AppConfigs
} from '../../app.config';
import {
    CustomEvents
} from '../../events/customevents';

@Component({
    selector: 'pzv-api-documentation',
    templateUrl: './api-documentation.component.html',
    styleUrls: ['./api-documentation.component.scss']
})
export class ApiDocumentationComponent implements OnInit {

    constructor(
        private _customEvents: CustomEvents,
        private _route: Router
    ) {
        // check the valid session
        if (AppConfigs.authToken === '') {
            this._customEvents.loginSuccess.emit(false);
        }
    }

    ngOnInit() { }

}
