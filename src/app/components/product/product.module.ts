import { PicturesModule } from './../pictures/pictures.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    PicturesModule
  ],
  providers: []
})

export class ProductModule { }
