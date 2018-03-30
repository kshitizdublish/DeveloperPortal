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
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

// import custom component
import {
    AppConfigs
} from '../app.config';
import {
    CustomEvents
} from '../events/customevents';

@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {

    errMessage = '';

    constructor(
        private _customEvents: CustomEvents
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: HttpRequest<any>;
        /*
        * add authorization token in all API calls
        * if user is logged In
        */
        const bearerToken: string = AppConfigs.authToken || '';
        // second condition added for user API call
        if (bearerToken.length && location.pathname !== '/rest-client') {
            authRequest = request.clone({
                headers: request.headers.set('Authorization', bearerToken)
            });
        } else {
            authRequest = request;
        }
        this._customEvents.showHideLoader.emit(true);
        return next.handle(authRequest).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this._customEvents.showHideLoader.emit(false);
            }
        }, (error: any) => {
            if (error instanceof HttpErrorResponse) {
                this._customEvents.showHideLoader.emit(false);
                error.status === 401 ?
                    this.errMessage = error.error.error :
                    this.errMessage = error.error.apiMessage;

                if (location.pathname !== '/rest-client') {
                    this._customEvents.showAlertEvent.emit({
                        message: this.errMessage,
                        status: 'Error'
                    });
                }
            }
        });
    }
}
