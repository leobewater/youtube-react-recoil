// cart store
import { atom } from 'recoil';
// An atom represents a piece of state. Atoms can be read from and written to from any component.

export const cartState = atom({
  key: 'cart',
  default: 0,
});
