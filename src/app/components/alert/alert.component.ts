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

// import custom component
import {
    CustomEvents
} from '../../events/customevents';

@Component({
    selector: 'pzv-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    showAlert = false;
    status = 'Error';
    alertMessage = '';

    showAlertSub: any;

    constructor(
        private _customEvents: CustomEvents
    ) {
        this.showAlertSub = this._customEvents.showAlertEvent.subscribe((value: any) => {
            this.alertMessage = value.message;
            this.status = value.status;
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 5000);
        });
    }

    ngOnInit() { }

    ngOnDestroy = () => {
        this.showAlertSub.unsubscribe();
    }

}
