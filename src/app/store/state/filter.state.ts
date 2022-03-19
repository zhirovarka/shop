export interface IFilterColorsState {
  colors: string[];
}

export interface IFilterSizesState {
  sizes: string[];
}

export const initFilterColorState: IFilterColorsState = {
  colors: []
};

export const initFilterSizesState: IFilterSizesState = {
  sizes: []
};
