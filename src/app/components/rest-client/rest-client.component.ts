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
    ElementRef,
    OnInit,
    ViewChild,
    NgModule
} from '@angular/core';
import {
    NgForm
} from '@angular/forms';

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
    selector: 'pzv-rest-client',
    templateUrl: './rest-client.component.html',
    styleUrls: ['./rest-client.component.scss']
})
export class RestClientComponent implements OnInit {

    @ViewChild('restClientForm')
    public restClientForm: NgForm;
    public apiMethod = 'GET';
    public endPoint = 'https://sandbox.api.danaaftermarket.com/pzp/api/v1/getInventoryAvailabilty';
    public requestParams: any[] = [{}];
    public headers: any[] = [{}];
    requestHeaders: any = {};
    requestBody: any = {};
    payload = '';

    statusCode = '';
    invalidJson = false;
    showResponse = false;
    responseObj: any = {};

    constructor(
        private _apiDispatcherService: ApiDispatcherService,
        private _customEvents: CustomEvents
    ) {
        // check the valid session
        if (AppConfigs.authToken === '') {
            this._customEvents.loginSuccess.emit(false);
        }
    }

    ngOnInit() { }

    addInputFields = (fieldType: string) => {
        'param' === fieldType ? this.requestParams.push({}) : this.headers.push({});
    }

    deleteLastFields = (fieldType: string) => {
        'param' === fieldType ? this.requestParams.pop() : this.headers.pop();
    }

    apiMethodChange = (event) => {
        this.showResponse = false;
        // empty the form fields
        this.payload = '';
        this.headers = [{}];
        this.requestParams = [{}];
        this.invalidJson = false;
    }

    makeApiCall = () => {
        this.showResponse = false;
        if (this.restClientForm.invalid) {
            return;
        }

        // prepare request body
        this.createRequestBody();
        // prepare headers object
        this.createHeaders();
        // check validity of payload JSON if not empty
        if (this.apiMethod === 'POST' && this.payload !== '') {
            try {
                JSON.parse(this.payload);
                this.invalidJson = false;
                // combined payload & requestBody
                this.requestBody = this.combinePayload(this.requestBody, JSON.parse(this.payload));
            } catch (error) {
                this.invalidJson = true;
                return;
            }
        }

        // call the user provided API and show the response
        this._apiDispatcherService.userRestApiCall(
            this.apiMethod,
            this.endPoint,
            this.requestBody,
            this.requestHeaders
        )
            .subscribe((res: any) => {
                this.formatApiResponse(res, 'Success');
            }, (error: any) => {
                this.formatApiResponse(error, 'Error');
            });
    }

    createRequestBody = () => {
        // empty the requestBody previous stored data
        this.requestBody = {};
        const params: any[] = this.requestParams;
        if ('object' !== typeof params || !params.length) {
            return;
        }
        this.requestParams.forEach((param: any) => {
            const key: string = param.key;
            const value: string = param.value;
            if (!key || !value) {
                return;
            }
            this.requestBody[key] = value;
        });
    }

    createHeaders = () => {
        // empty the requestHeaders previous stored data
        this.requestHeaders = {};
        const headers: any[] = this.headers;
        if ('object' !== typeof headers || !headers.length) {
            return;
        }
        this.headers.forEach((header: any) => {
            const key: string = header.key;
            const value: string = header.value;
            if (!key || !value) {
                return;
            }
            this.requestHeaders[key] = value;
        });
    }

    combinePayload = (body, payload) => {
        for (const key in payload) {
            if (payload.hasOwnProperty(key)) { body[key] = payload[key]; }
        }
        return body;
    }

    formatApiResponse = (res, status) => {
        this.showResponse = true;
        this.statusCode = status;
        this.responseObj = JSON.stringify({
            'STATUS_CODE': status,
            'BODY': res
        }, null, 4);
    }

}
