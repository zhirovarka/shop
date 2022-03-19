import { Item } from 'src/app/interfaces/item.interface';

export interface IItemState {
  items: Item[];
}

export const initItemState: IItemState = {
  items: []
};
