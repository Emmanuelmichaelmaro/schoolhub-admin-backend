import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [FuseSearchBarComponent],
    imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
    exports: [FuseSearchBarComponent],
})
export class FuseSearchBarModule {}
