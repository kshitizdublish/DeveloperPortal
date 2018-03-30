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
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    FormsModule,
    NgForm
} from '@angular/forms';
import {
    Router
} from '@angular/router';
import {
    TranslateService
} from 'ng2-translate';

// import custom component
import {
    AppConfigs
} from '../app.config';
import {
    AuthService
} from '../components/authorization/auth.service';
import {
    CustomEvents
} from '../events/customevents';
import {
    DataObjectUtils
} from '../utils/DataObjectUtils';
import {
    LoginBannerComponent
} from '../components/login-banner/login-banner.component';

@Component({
    selector: 'pzv-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    requiredUserName = false;
    requiredPassword = false;
    requiredcustomerId = false;
    typePassword = false;
    showPasswordIcon = false;

    loginDetails = {
        user: '',
        password: '',
        customerId: '',
        tenant: 'dana.com'
    };
    @ViewChild('loginForm')
    public loginForm: NgForm;

    constructor(
        private _authService: AuthService,
        private _customEvents: CustomEvents,
        private _router: Router,
        private translate: TranslateService,
    ) {
        /*
		* if valid authToken then
        * redirect to home page
        */
        if (AppConfigs.authToken !== '') {
            this._router.navigate(['/api-key']);
        }
    }

    ngOnInit() { }

    // show hide password field text
    togglePassword = () => {
        this.typePassword = !this.typePassword;
    }

    checkEmptyField = (fieldtype, event) => {
        if (event.pristine) {
            return;
        }
        const controls = this.loginForm.controls;
        if (fieldtype === 'Username') {
            controls.user.value === '' ? this.requiredUserName = true : this.requiredUserName = false;
        } else if (fieldtype === 'Password') {
            controls.password.value === '' ? this.showPasswordIcon = false : this.showPasswordIcon = true;
            controls.password.value === '' ? this.requiredPassword = true : this.requiredPassword = false;
        } else {
            controls.customerId.value === '' ? this.requiredcustomerId = true : this.requiredcustomerId = false;
        }
    }

    // login button clicked call submitForm function
    submitForm = (value: any) => {
        // check empty field's
        const controls = this.loginForm.controls;
        controls.user.value === '' ? this.requiredUserName = true : this.requiredUserName = false;
        controls.password.value === '' ? this.requiredPassword = true : this.requiredPassword = false;
        controls.customerId.value === '' ? this.requiredcustomerId = true : this.requiredcustomerId = false;

        if (this.loginForm.invalid) {
            return;
        }
        // remove the white spaces from the input values
        DataObjectUtils.stripWhiteSpace(value);
        this._authService.requestLogin(this.loginDetails)
            .subscribe((response) => {
                console.log('Login successfull!');
                this._customEvents.loginSuccess.emit(true);
                // store the authorization token in localStorage
                AppConfigs.authToken = 'Bearer ' + response.userToken;
                this._router.navigate([
                    '/api-key'
                ]);
            }, (error: any) => {
                AppConfigs.authToken = '';
                console.log('Login Unsuccessfull!');
            });
    }
}
