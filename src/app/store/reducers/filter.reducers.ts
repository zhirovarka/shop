import { IFilterColorsState, IFilterSizesState, initFilterSizesState, initFilterColorState } from '../state/filter.state';
import { FilterActions, EFilterActions } from '../actions/filter.actions';

export const filterColorsReducers = (
  state = initFilterColorState,
  action: FilterActions
): IFilterColorsState => {
  switch (action.type) {
    case EFilterActions.GetFilterColors: {
      return {
        ...state,
        colors: action.payload
      };
    }
    default: return state;
  }
};

export const filterSizesReducers = (
  state = initFilterSizesState,
  action: FilterActions
): IFilterSizesState => {
  switch (action.type) {
    case EFilterActions.GetFilterSizes: {
      return {
        ...state,
        sizes: action.payload
      };
    }
    default: return state;
  }
};
