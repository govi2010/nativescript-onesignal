import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOnesignalSdkComponent } from './nativescript-onesignal-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOnesignalSdkComponent }])],
	declarations: [NativescriptOnesignalSdkComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOnesignalSdkModule {}
