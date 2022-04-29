import { GoodsComponent } from './components/goods/goods.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentGuard } from './services/guard/payment-guard.service';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./components/basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./components/payment/payment.module').then(
        (m) => m.PaymentModule
      ),
    canActivate: [PaymentGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
