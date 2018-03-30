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
    OnInit
} from '@angular/core';

// import custom component
import {
    AppConfigs
} from '../../app.config';
import {
    CustomEvents
} from '../../events/customevents';

// import custom service
import {
    ApiDispatcherService
} from '../../core/api-dispatcher/api-dispatcher.service';

@Component({
    selector: 'pzv-api-key',
    templateUrl: './api-key.component.html',
    styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent implements OnInit {

    hasKey = false;
    applicationData: Object = [{}];

    constructor(
        private _customEvents: CustomEvents,
        private _apiDispatcher: ApiDispatcherService
    ) {
        // check the valid session
        if (AppConfigs.authToken === '') {
            this._customEvents.loginSuccess.emit(false);
        } else {
            this.getApplication();
        }
    }

    ngOnInit() { }

    getApplication = () => {
        const pageUrl = 'applicationmanage/v1/applications';
        this._apiDispatcher.doGetApiCall(
            pageUrl
        ).subscribe((response: any) => {
            this.applicationData = response;
            this.hasKey = true;
        });
    }

}
