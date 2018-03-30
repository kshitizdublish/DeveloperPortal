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
    ApiDocumentationComponent
} from './api-documentation.component';
import {
    AvailabilityRoutes
} from './availability/availability.routes';
import {
    AvailabilityComponent
} from './availability/availability.component';

export const DocumentationRoutes: Route[] = [
    {
        path: 'api-documentation',
        redirectTo: 'api-documentation/availability',
        pathMatch: 'full'
    },
    {
        path: 'api-documentation',
        component: ApiDocumentationComponent,
        children: [
            ...AvailabilityRoutes
        ]
    }

];
