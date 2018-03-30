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
    Routes,
    RouterModule
} from '@angular/router';

// import custom component
import {
    ApiKeyComponent
} from './components/api-key/api-key.component';
import {
    DocumentationRoutes
} from './components/api-documentation/documentation.routes';
import {
    LoginComponent
} from './login/login.component';
import {
    RestClientComponent
} from './components/rest-client/rest-client.component';

const routes: Routes = [
    ...DocumentationRoutes,
    {
        path: 'rest-client',
        component: RestClientComponent
    },
    {
        path: 'api-key',
        component: ApiKeyComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
