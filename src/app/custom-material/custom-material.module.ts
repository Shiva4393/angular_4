import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'; // layout npm
import { 
   MatInputModule,
   MatButtonModule,
   MatCardModule
} from '@angular/material';

@NgModule({
  imports: [FlexLayoutModule, MatInputModule, MatButtonModule, MatCardModule],
  exports: [FlexLayoutModule, MatInputModule, MatButtonModule, MatCardModule],
})
export class CustomMaterialModule { }