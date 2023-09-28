// cart store
// An atom represents a piece of state. Atoms can be read from and written to from any component.
import { atom } from 'recoil';
import { Item } from '../models/Item';

export const cartState = atom<Item[]>({
  key: 'cart',
  default: [],
});
