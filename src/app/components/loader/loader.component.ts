import {
    Component,
    OnInit
} from '@angular/core';
import {
    CustomEvents
} from '../../events/customevents';
import {
    Subscription
} from 'rxjs/Subscription';

@Component({
    selector: 'pzv-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    showLoader = false;
    loaderListner: Subscription;

    constructor(
        private _customEvents: CustomEvents
    ) {
        this.loaderListner = this._customEvents.showHideLoader.subscribe((value: boolean) => {
            this.showLoader = value;
        });
    }

    ngOnInit () { }

    ngDestroy = () => {
        if (this.loaderListner) { this.loaderListner.unsubscribe(); }
    }

}
