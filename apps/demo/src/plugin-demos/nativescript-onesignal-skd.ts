import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOnesignalSkd } from '@demo/shared';
import {} from '@nativescript/nativescript-onesignal-skd';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOnesignalSkd {}
