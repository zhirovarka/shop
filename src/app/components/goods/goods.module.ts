import { FilterModule } from './../filter/filter.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoodsComponent } from './goods.component';
import { ItemModule } from '../item/item.module';
import { CarouseAnimatedComponent } from '../carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    GoodsComponent,
    CarouseAnimatedComponent
  ],
  imports: [
    BrowserModule,
    ItemModule,
    FilterModule,
    CarouselModule.forRoot()
  ],
  providers: []
})

export class GoodsModule { }
