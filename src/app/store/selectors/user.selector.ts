import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

const selectItems = (state: IAppState) => state.user;

export const selectUser = () => createSelector(
  selectItems,
  (state: IUserState) => state.user.user
);

export const selectUserLoading = () => createSelector(
  selectItems,
  (state: IUserState) => state.user.isLoading
);
