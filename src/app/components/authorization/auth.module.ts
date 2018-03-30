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
    CommonModule
} from '@angular/common';
import {
    NgModule
} from '@angular/core';

// import custom component
import {
    CustomEvents
} from '../../events/customevents';

// import custom service
import {
    AuthService
} from './auth.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        CustomEvents
    ],
    declarations: []
})
export class AuthModule { }
