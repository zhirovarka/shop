import { EUserActions, UserActions } from '../actions/user.actions';
import { initUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserInfo: {
      return {
        ...state,
        user: {
          user: state.user.user,
          isLoading: true,
        },
      };
    }
    case EUserActions.GetUserInfoSuccess: {
      return {
        ...state,
        user: {
          user: action.payload,
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
};
