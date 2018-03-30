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
import {
    RouterModule
} from '@angular/router';
import {
    TranslateModule,
    TranslateLoader
} from 'ng2-translate';

// import custom component
import {
    ApiDocumentationComponent
} from './api-documentation.component';
import {
    ApiLinksComponent
} from '../api-links/api-links.component';
import {
    AvailabilityComponent
} from './availability/availability.component';
import {
    CustomEvents
} from '../../events/customevents';
import {
    QuantityComponent
} from './quantity/quantity.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    declarations: [
        ApiDocumentationComponent,
        ApiLinksComponent,
        AvailabilityComponent,
        QuantityComponent
    ],
    providers: [
        CustomEvents
    ],
    exports: [
        ApiDocumentationComponent
    ]
})
export class DocumentationModule { }
