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
    OnInit
} from '@angular/core';

export class DataObjectUtils {

    /*
	* strip white space from start and end of the string
	*/
    public static stripWhiteSpace = (value: any) => {
        let hasEmpty = false;
        for (const i in value) {
            if (typeof (value[i]) === 'string') {
                value[i] = String(value[i]).trim();
                if (value[i] === '') {
                    hasEmpty = true;
                }
            }
        }
        return hasEmpty;
    }

}
