// cart store
// An atom represents a piece of state. Atoms can be read from and written to from any component.
import { atom, selector } from 'recoil';
import { Item } from '../models/Item';

export const cartState = atom<Item[]>({
  key: 'cart',
  default: [],
});

// anytime the cartState changes, it renders this and all the components using this
export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total: number, item: Item) => total + item.price, 0);
  },
});
