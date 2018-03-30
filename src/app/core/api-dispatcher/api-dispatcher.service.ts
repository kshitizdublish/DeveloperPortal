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
    HttpClient
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs/observable';
import {
    of
} from 'rxjs/observable/of';
import {
    Response
} from '@angular/http';

// import custom component
import {
    AppConfigs
} from '../../app.config';
import {
    HttpInterceptorClass
} from '../../common/httpInterceptor';

@Injectable()
export class ApiDispatcherService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    doGetApiCall = (pageUrl: string) => {
        const path = AppConfigs.env.apiUrl + pageUrl;
        return this._httpClient.get(path);
    }

    doPostApiCall = (pageUrl: string, sbody: Object) => {
        const path = AppConfigs.env.apiUrl + pageUrl;
        return this._httpClient
            .post(
                path,
                JSON.stringify(sbody)
            );
    }

    // login post api call
    doLoginApiCall = (pageUrl: string, sbody: Object) => {
        const path = AppConfigs.env.apiUrl + pageUrl;
        return this._httpClient
            .post(
                path,
                JSON.stringify(sbody)
            );
    }

    // user rest-client API call
    userRestApiCall = (methodType, path, requestBody, requestHeaders) => {
        let headers: any;
        if (requestHeaders && Object.keys(requestHeaders).length) {
            headers = {
                headers: requestHeaders
            };
        }
        if (methodType === 'POST') {
            return this._httpClient
                .post(
                    path,
                    JSON.stringify(requestBody),
                    headers
                );
        } else {
            return this._httpClient
                .get(
                    path,
                    headers
                );
        }
    }

}
