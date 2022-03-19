import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures.component';

@NgModule({
  declarations: [
    PicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    PicturesComponent
  ]
})

export class PicturesModule { }
