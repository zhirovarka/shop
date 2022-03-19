import { ItemActions, EItemsActions } from './../actions/item.actions';
import { initItemState, IItemState } from './../state/item.state';
export const itemReducers = (
  state = initItemState,
  action: ItemActions
): IItemState => {
  switch (action.type) {
    case EItemsActions.GetItemsSuccess: {
      return {
        ...state,
        items: action.payload
      };
    }
    default: return state;
  }
};
