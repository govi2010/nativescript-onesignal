import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOnesignalSdk } from '@demo/shared';
import { NativescriptOnesignalSdk } from '@nativescript/nativescript-onesignal-sdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOnesignalSdk {
	constructor() {
		super();
		console.log(NativescriptOnesignalSdk);
	}
}
