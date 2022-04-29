import { Item } from './../../interfaces/item.interface';
export interface IBasketState {
  basketItems: BasketItems[];
}

export interface BasketItems {
  id: number;
  item: Item;
  count: number;
}

export const initBasketItems: IBasketState = {
  basketItems: [],
};
