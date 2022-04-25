import { Action, createReducer, on } from '@ngrx/store';
import {
  EUserActions,
  UserActions,
  // getUserInfoAction,
  // getUserInfoSuccessAction,
} from '../actions/user.actions';
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
      console.log('reducer:', action.payload);
      return {
        ...state,
        user: {
          user: action.payload,
          // user: state.user.user,
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
};

// const userReducers = createReducer(
//   initUserState,
//   on(
//     getUserInfoSuccessAction,
//     (state, action): IUserState => ({
//       ...state,
//       user: {
//         user: action.user,
//         isLoading: false,
//       },
//     })
//   ),
//   on(getUserInfoAction, (state) => ({
//     ...state,
//     user: {
//       ...state.user,
//       isLoading: true,
//     },
//   }))
// );

// export function userReducers(state: IUserState, action: Action) {
//   return userReducers(state, action);
// }
