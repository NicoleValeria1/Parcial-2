import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosauriosListComponent } from './dinosaurios-list/dinosaurios-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DinosauriosListComponent],
  declarations: [DinosauriosListComponent]
})
export class DinosauriosModule { }
