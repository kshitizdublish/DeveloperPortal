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
    Route
} from '@angular/router';

// import custom component
import {
    AvailabilityComponent
} from './availability.component';
import {
    QuantityComponent
} from '../quantity/quantity.component';

export const AvailabilityRoutes: Route[] = [
    {
        path: 'availability',
        component: AvailabilityComponent
    },
    {
        path: 'quantity',
        component: QuantityComponent
    }
];
