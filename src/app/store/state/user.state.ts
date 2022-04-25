export interface IUserState {
  user: {
    user: boolean;
    isLoading: boolean;
  };
}

export const initUserState: IUserState = {
  user: {
    user: null,
    isLoading: true,
  },
};
