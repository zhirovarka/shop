import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PicturesComponent],
  imports: [
    // BrowserModule
    CommonModule,
  ],
  providers: [],
  exports: [PicturesComponent],
})
export class PicturesModule {}
