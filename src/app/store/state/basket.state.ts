import { Item } from './../../interfaces/item.interface';
export interface IBasketState {
  basketItems: BasketItems[];
}

export interface BasketItems {
  item: Item;
  count: number;
}

export const initBasketItems: IBasketState = {
  basketItems: [],
};
