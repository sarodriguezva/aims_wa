import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatExpansionModule,
        MatDividerModule,
        MatTableModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatExpansionModule,
        MatDividerModule,
        MatTableModule,
    ],
})
export class AppMaterialModule {}
