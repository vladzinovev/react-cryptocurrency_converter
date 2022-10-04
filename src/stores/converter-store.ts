import { observable, computed, action, makeObservable} from 'mobx';
import { TCoin, TSelectedCoin } from '../types';

class ConverterStore {
    @observable selectedInCoin={
        name:'BTC',
    }
    @computed
    get getSelectedInCoin() {
        return this.selectedInCoin;
    }
    @action
    setSelectedInCoin(name:any) {
        this.selectedInCoin = {
            name: name
        };
    }

    @observable selectedInPrice={
        price: 1,
    }
    @computed
    get getSelectedInPrice() {
        return this.selectedInPrice;
    }
    @action
    setSelectedInPrice(price:any) {
        this.selectedInPrice = {
            price: price
        };
    }

    @observable selectedOutCoin={
        name:'BTC',
    }
    @computed
    get getSelectedOutCoin() {
        return this.selectedOutCoin;
    }
    @action
    setSelectedOutCoin(name:any) {
        this.selectedOutCoin = {
            name: name
        };
    }
    constructor() {
        makeObservable(this);
    }
}

export default ConverterStore;