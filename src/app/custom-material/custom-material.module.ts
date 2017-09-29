import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'; // layout npm
import { 
   MatInputModule,
   MatButtonModule,
   MatCheckboxModule,
   MatCardModule,
   MatIconModule
} from '@angular/material';

@NgModule({
  imports: [FlexLayoutModule, MatInputModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule],
  exports: [FlexLayoutModule, MatInputModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule],
})
export class CustomMaterialModule { }