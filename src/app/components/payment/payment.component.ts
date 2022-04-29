import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClearItemsInBasket } from 'src/app/store/actions/basket.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  public ngOnInit(): void {
    this.buyItems();
  }

  public buyItems(): void {
    this.store.dispatch(new ClearItemsInBasket());
  }

  public returnToMainPage(): void {
    this.router.navigate(['/']);
  }
}
