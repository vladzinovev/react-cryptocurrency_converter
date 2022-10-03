import { observable, computed, action, makeObservable, makeAutoObservable } from 'mobx';
import stores from '.';
import { TCoin, TSelectedCoin } from '../types';

class ConverterStore {
    @observable private selectedCoin: TSelectedCoin = {
        name: '',
        price: 0,
    };
    
    
    constructor() {
        makeObservable(this);
    }

    @computed
    get getSelectedCoin() {
        return this.selectedCoin;
    }
    @action
    setSelectedCoin(coin: TCoin) {
        this.selectedCoin = {
            name: coin.name,
            price: coin.price,
        };
    }

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
        price: 0,
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

    
}

export default ConverterStore;