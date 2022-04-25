import { IBasketState } from './../state/basket.state';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const selectItems = (state: IAppState) => state.basketItems;

export const selectBasketItemList = createSelector(
  selectItems,
  (state: IBasketState) => state.basketItems
);

export const selectBasketItemListLength = createSelector(
  selectItems,
  (state: IBasketState) =>
    !!state.basketItems.length ? state.basketItems.length : null
);
