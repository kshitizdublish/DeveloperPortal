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
    enableProdMode
} from '@angular/core';
import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic';

// import user module
import {
    AppModule
} from './app/app.module';
import {
    environment
} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
