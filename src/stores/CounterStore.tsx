import { observable } from 'mobx';
import { createContext } from 'react';
class CounterStore {
  @observable counter = 0;
}

export const CounterStoreContext = createContext(new CounterStore());