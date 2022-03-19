import { IItemState } from './../state/item.state';
import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectItems = (state: IAppState) => state.items;

export const selectItemList = createSelector(
  selectItems,
  (state: IItemState) => state.items
);
