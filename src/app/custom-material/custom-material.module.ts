import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'; // layout npm
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule],
})
export class CustomMaterialModule { }