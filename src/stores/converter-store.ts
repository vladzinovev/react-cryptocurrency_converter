import { observable, computed, action, makeObservable, makeAutoObservable } from 'mobx';
import stores from '.';
import { TCoin, TSelectedCoin } from '../types';

class ConverterStore {
    @observable private selectedCoin: TSelectedCoin = {
        name: '',
        price: 0,
    };
    @observable selectedInCoin={
        name:'',
    }
    
    constructor() {
        makeObservable(this);
    }

    @computed
    get getSelectedCoin() {
        return this.selectedCoin;
    }
    @computed
    get getSelectedInCoin() {
        return this.selectedInCoin;
    }

    @action
    setSelectedCoin(coin: TCoin) {
        this.selectedCoin = {
            name: coin.name,
            price: coin.price,
        };
    }
    @action
    setSelectedInCoin(name:any) {
        this.selectedInCoin = {
            name: name
        };
    }
    
}

export default ConverterStore;