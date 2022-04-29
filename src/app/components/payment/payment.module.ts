import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentRouterModule } from './payment-router.module';
import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, PaymentRouterModule],
})
export class PaymentModule {}
