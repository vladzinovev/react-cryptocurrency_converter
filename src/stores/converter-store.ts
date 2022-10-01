import { observable, computed, action } from 'mobx';
import { TCoin, TSelectedCoin } from '../types';

class ConverterStore {
  @observable private selectedCoin: TSelectedCoin = {
    name: '',
    price: 0,
  };

  
}

export default ConverterStore;