import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { FusePipesModule } from '@fuse/pipes/pipes.module';

import { FuseMaterialColorPickerComponent } from '@fuse/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [FuseMaterialColorPickerComponent],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        FusePipesModule,
    ],
    exports: [FuseMaterialColorPickerComponent],
})
export class FuseMaterialColorPickerModule {}
