import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOnesignalSkd } from '@demo/shared';
import {} from '@nativescript/nativescript-onesignal-skd';

@Component({
	selector: 'demo-nativescript-onesignal-skd',
	templateUrl: 'nativescript-onesignal-skd.component.html',
})
export class NativescriptOnesignalSkdComponent {
	demoShared: DemoSharedNativescriptOnesignalSkd;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOnesignalSkd();
	}
}
