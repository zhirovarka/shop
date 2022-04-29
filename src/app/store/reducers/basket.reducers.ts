import { BasketActions, EBasketActions } from '../actions/basket.actions';
import { IBasketState, initBasketItems } from '../state/basket.state';

export const basketReducers = (
  state = initBasketItems,
  action: BasketActions
): IBasketState => {
  switch (action.type) {
    case EBasketActions.AddItemInBasketSuccess: {
      console.log('testBasket:', action.payload);
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    }
    case EBasketActions.DeleteItemInBasketSuccess: {
      return {
        ...state,
        basketItems: [
          ...state.basketItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    }
    default:
      return state;
  }
};
