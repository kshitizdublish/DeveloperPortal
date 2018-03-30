import {
    AppConfigs
} from '../../app.config';
import {
    Component,
    ChangeDetectorRef,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    CustomEvents
} from '../../events/customevents';
import {
    ISubscription
} from 'rxjs/Subscription';

@Component({
    selector: 'pzv-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed = true;
    showMenu = false;
    showNavBar = false;
    loginSuccessSub: ISubscription;

    constructor(
        private _customEvents: CustomEvents,
        private _ref: ChangeDetectorRef
    ) {
        this.loginSuccessSub = this._customEvents.loginSuccess.subscribe((userLoggedIn: boolean) => {
            this.showNavBar = userLoggedIn;
        });
        AppConfigs.authToken === '' ? this.showNavBar = false : this.showNavBar = true;
    }

    ngOnInit() { }

    onClickLogOut = () => {
        this._customEvents.loginSuccess.emit(false);
    }

    showMobileMenu = () => {
        this.showMenu = !this.showMenu;
    }

    ngOnDestroy = () => {
        // called once, before the instance is destroyed.
        this.loginSuccessSub.unsubscribe();
    }

}
