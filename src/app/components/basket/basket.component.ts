import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectBasketItemList } from 'src/app/store/selectors/basket.selector';
import { BasketItems } from 'src/app/store/state/basket.state';
import { DeleteItemInBasketSuccess } from 'src/app/store/actions/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  public basket$ = this.store.select(selectBasketItemList);

  constructor(private store: Store, private router: Router) {}

  public ngOnInit(): void {
    console.log('init basket');
  }

  public deleteItem(event: number) {
    console.log('event', event);
    this.store.dispatch(new DeleteItemInBasketSuccess({ id: event }));
  }

  public navigateToItem(card: BasketItems): void {
    this.router.navigate([`/product/${card.item._id.$oid}`]);
  }

  public buyItems(): void {
    console.log('buy items!!!');
    this.router.navigate(['payment']);
  }
}
