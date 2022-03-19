import { Item } from 'src/app/interfaces/item.interface';
import { Action } from '@ngrx/store';

export enum EItemsActions {
  // GetItems = '[Item] Get Items',
  GetItemsSuccess = '[Items] Get Items Success',
  // GetItem = '[Item] Get Item',
  // GetItemSuccess = '[Item] Get Item Success'
}

// export class GetItems implements Action {
//   public readonly type = EItemsActions.GetItems;
//   constructor(public payload: Item[]) { }
// }

export class GetItemsSuccess implements Action {
  public readonly type = EItemsActions.GetItemsSuccess;
  constructor(public payload: Item[]) { }
}

// export class GetItem implements Action {
//   public readonly type = EItemsActions.GetItem;
//   constructor(public payload: string) { }
// }

// export class GetItemSuccess implements Action {
//   public readonly type = EItemsActions.GetItemSuccess;
//   constructor(public payload: Item) { }
// }

// export type ItemActions = GetItems | GetItemsSuccess | GetItem | GetItemSuccess;
export type ItemActions = GetItemsSuccess;
