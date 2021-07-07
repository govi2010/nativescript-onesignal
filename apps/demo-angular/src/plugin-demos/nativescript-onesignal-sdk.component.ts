import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOnesignalSdk } from '@demo/shared';
import {} from '@nativescript/nativescript-onesignal-sdk';

@Component({
	selector: 'demo-nativescript-onesignal-sdk',
	templateUrl: 'nativescript-onesignal-sdk.component.html',
})
export class NativescriptOnesignalSdkComponent {
	demoShared: DemoSharedNativescriptOnesignalSdk;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOnesignalSdk();
	}
}
