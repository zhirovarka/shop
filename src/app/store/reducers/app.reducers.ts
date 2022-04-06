import { filterColorsReducers, filterSizesReducers } from './filter.reducers';
import { itemReducers } from './item.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { basketReducers } from './basket.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  items: itemReducers,
  colors: filterColorsReducers,
  sizes: filterSizesReducers,
  basketItems: basketReducers,
};
