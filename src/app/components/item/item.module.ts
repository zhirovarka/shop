import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [
    ItemComponent
  ]
})

export class ItemModule { }
