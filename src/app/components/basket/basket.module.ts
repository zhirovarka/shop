import { BasketComponent } from './basket.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BasketRouterModule } from './basket-router.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, FormsModule, BasketRouterModule],
  providers: [],
  exports: [BasketComponent],
})
export class BasketModule {}
