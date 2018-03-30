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
    EventEmitter,
    Injectable
} from '@angular/core';

@Injectable()
export class CustomEvents {

    /**
	* language Change Event
    * example: 'this._customEvents.langChangeEvt.emit( {lang: 'nl'} );'
	**/
    public langChangeEvt: EventEmitter<string> = new EventEmitter();

    /**
	* show global alert
	* which will be fade out after 5 seconds
	* example: 'this._customEvents.showAlertEvent.emit({
			message: alertMessage,
			status: 'Success/Error'
		});
	**/
    public showAlertEvent: EventEmitter<Object> = new EventEmitter();

    /**
	* show/hide global loader
	* example: 'this._customEvents.showHideLoader.emit(true);
	**/
    public showHideLoader: EventEmitter<boolean> = new EventEmitter();

    /**
	* successful login event
	* example: 'this._customEvents.loginSuccess.emit(true);'
	**/
    public loginSuccess: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

}
