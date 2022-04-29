import { Action } from '@ngrx/store';
import { Item } from 'src/app/interfaces/item.interface';

export enum EBasketActions {
  AddItemInBasketSuccess = '[Basket] Add Items In Basket Success',
  AddItemInBasketFailed = '[Basket] Add Items In Basket Failed',
  DeleteItemInBasketSuccess = '[Basket] Delete Items In Basket Success',
  ClearItemsInBasket = '[Basket] Claer Items In Basket Success',
}

export class AddItemInBasketSuccess implements Action {
  public readonly type = EBasketActions.AddItemInBasketSuccess;
  constructor(public payload: { item: Item; count: number; id: number }) {}
}

export class AddItemInBasketFailed implements Action {
  public readonly type = EBasketActions.AddItemInBasketFailed;
}

export class DeleteItemInBasketSuccess implements Action {
  public readonly type = EBasketActions.DeleteItemInBasketSuccess;
  constructor(public payload: { id: number }) {}
}

export class ClearItemsInBasket implements Action {
  public readonly type = EBasketActions.ClearItemsInBasket;
}

export type BasketActions =
  | AddItemInBasketSuccess
  | AddItemInBasketFailed
  | DeleteItemInBasketSuccess
  | ClearItemsInBasket;
