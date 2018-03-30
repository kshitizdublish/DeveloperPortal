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
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs/Observable';

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

@Injectable()
export class AuthService {

    constructor(
        private _apiDispatcherService: ApiDispatcherService,
        private _customEvents: CustomEvents
    ) { }

    requestLogin = (loginDetails: any): Observable<any> => {
        const pageUrl = 'platformservice/v1/login';
        return new Observable((subscriber: any) => {
            this._apiDispatcherService
                .doLoginApiCall(
                    pageUrl,
                    Object.assign(loginDetails)
                )
                .subscribe((response: any) => {
                    subscriber.next(response);
                }, (error: any) => {
                    subscriber.error(error);
                });
        });
    }

}
