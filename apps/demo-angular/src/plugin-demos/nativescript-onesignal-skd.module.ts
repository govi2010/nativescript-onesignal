import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOnesignalSkdComponent } from './nativescript-onesignal-skd.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOnesignalSkdComponent }])],
	declarations: [NativescriptOnesignalSkdComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOnesignalSkdModule {}
