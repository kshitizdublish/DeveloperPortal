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
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    isPromise
} from 'q';
import {
    Injectable
} from '@angular/core';

@Injectable()
export class AppLoadService {

    httpHeaders: HttpHeaders;

    constructor(
        private httpClient: HttpClient
    ) { }

    /**
    * a function that will be executed
    * when an application is initialized.
    * call an appconfig api
	* to get the theme, font-icons, etc
    */
    getAppSettings(): Promise<any> {
        const path = 'http://qaplatform.phasezero.xyz/platform-service/api/v1/tenant/appconfigInfo';
        this.httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'domain': 'qaui.phasezero.xyz'
        });
        const promise = this.httpClient
            .get(
                path,
                { headers: this.httpHeaders }
            )
            .toPromise()
            .then(settings => {
                return settings;
            });

        return promise;
    }
}
