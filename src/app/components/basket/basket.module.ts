import { BasketComponent } from './basket.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasketRouterModule } from './basket-router.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from './component/item-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [BasketComponent, ItemCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    BasketRouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  exports: [BasketComponent],
})
export class BasketModule {}
