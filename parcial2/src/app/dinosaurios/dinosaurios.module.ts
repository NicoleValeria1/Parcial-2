import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosauriosListComponent } from './dinosaurios-list/dinosaurios-list.component';
import { DinosauriosDetailComponent } from './dinosaurios-detail/dinosaurios-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DinosauriosListComponent],
  declarations: [DinosauriosListComponent, DinosauriosDetailComponent]
})
export class DinosauriosModule { }
