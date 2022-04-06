import { IBasketState, initBasketItems } from './basket.state';
import {
  IFilterColorsState,
  IFilterSizesState,
  initFilterColorState,
  initFilterSizesState,
} from './filter.state';
import { IItemState, initItemState } from './item.state';
export interface IAppState {
  items: IItemState;
  colors: IFilterColorsState;
  sizes: IFilterSizesState;
  basketItems: IBasketState;
}

export const initAppState: IAppState = {
  items: initItemState,
  colors: initFilterColorState,
  sizes: initFilterSizesState,
  basketItems: initBasketItems,
};

export function getInitState(): IAppState {
  return initAppState;
}
