import { IFilterColorsState, IFilterSizesState, initFilterColorState, initFilterSizesState } from './filter.state';
import { IItemState, initItemState } from './item.state';
export interface IAppState {
  items: IItemState;
  colors: IFilterColorsState;
  sizes: IFilterSizesState;
}

export const initAppState: IAppState = {
  items: initItemState,
  colors: initFilterColorState,
  sizes: initFilterSizesState
};

export function getInitState(): IAppState {
  return initAppState;
}
