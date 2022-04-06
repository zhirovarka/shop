import { Action } from '@ngrx/store';
import { Item } from 'src/app/interfaces/item.interface';

export enum EBasketActions {
  AddItemInBasketSuccess = '[Basket] Add Items In Basket Success',
  AddItemInBasketFailed = '[Basket] Add Items In Basket Failed',
}

export class AddItemInBasketSuccess implements Action {
  public readonly type = EBasketActions.AddItemInBasketSuccess;
  constructor(public payload: Item, public count: number) {}
}

export class AddItemInBasketFailed implements Action {
  public readonly type = EBasketActions.AddItemInBasketFailed;
}

export type BasketActions = AddItemInBasketSuccess | AddItemInBasketFailed;
