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
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';

/**
 * import custom service
*/
import {
    ApiDispatcherService
} from './api-dispatcher/api-dispatcher.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        ApiDispatcherService
    ]
})

export class CoreModule { }
