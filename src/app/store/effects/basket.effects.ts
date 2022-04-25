import { tap, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EBasketActions } from '../actions/basket.actions';
import { selectBasketItemList } from '../selectors/basket.selector';

@Injectable()
export class BasketEffects {
  constructor(private actions$: Actions, private store: Store) {}

  @Effect({ dispatch: false })
  public AddItemInBasketSuccess$ = this.actions$.pipe(
    ofType(EBasketActions.AddItemInBasketSuccess),
    tap(({ payload }) => {
      const count = sessionStorage.getItem('basket');
      if (count === null) {
        sessionStorage.setItem('basket', JSON.stringify([payload]));
      } else {
        sessionStorage.setItem(
          'basket',
          JSON.stringify([...JSON.parse(count), payload])
        );
      }
    })
  );
}
