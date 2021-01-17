import { NgModule } from '@angular/core';

import { FuseWidgetToggleDirective } from './widget-toggle.directive';
import { FuseWidgetComponent } from './widget.component';

@NgModule({
    declarations: [FuseWidgetComponent, FuseWidgetToggleDirective],
    exports: [FuseWidgetComponent, FuseWidgetToggleDirective],
})
export class FuseWidgetModule {}
