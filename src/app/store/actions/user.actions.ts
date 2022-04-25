import { Action } from '@ngrx/store';

export enum EUserActions {
  GetUserInfo = '[User] Get User Info',
  GetUserInfoSuccess = '[User] Get User Info Success',
}

// export const getUserInfoSuccessAction = createAction(EUserActions.GetUserInfoSuccess, props<{user: firebase.User | null}>());
// export const getUserInfoAction = createAction(EUserActions.GetUserInfo);

export class GetUserInfoSuccess implements Action {
  public readonly type = EUserActions.GetUserInfoSuccess;
  constructor(public payload: boolean) {}
}

export class GetUserInfo implements Action {
  public readonly type = EUserActions.GetUserInfo;
}

export type UserActions = GetUserInfo | GetUserInfoSuccess;
