import { Action } from '@ngrx/store';
export enum EFilterActions {
  GetFilterSizes = '[Sizes] Get sizes success',
  GetFilterColors = '[Colors] Get colors success'
}

export class GetFilterSizes implements Action {
  public readonly type = EFilterActions.GetFilterSizes;
  constructor(public payload: string[]) { }
}

export class GetFilterColors implements Action {
  public readonly type = EFilterActions.GetFilterColors;
  constructor(public payload: string[]) { }
}

export type FilterActions = GetFilterSizes | GetFilterColors;
