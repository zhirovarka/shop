import { IBasketState, initBasketItems } from './basket.state';
import {
  IFilterColorsState,
  IFilterSizesState,
  initFilterColorState,
  initFilterSizesState,
} from './filter.state';
import { IItemState, initItemState } from './item.state';
import { initUserState, IUserState } from './user.state';
export interface IAppState {
  items: IItemState;
  colors: IFilterColorsState;
  sizes: IFilterSizesState;
  basketItems: IBasketState;
  user: IUserState;
}

export const initAppState: IAppState = {
  items: initItemState,
  colors: initFilterColorState,
  sizes: initFilterSizesState,
  basketItems: initBasketItems,
  user: initUserState,
};

export function getInitState(): IAppState {
  return initAppState;
}
