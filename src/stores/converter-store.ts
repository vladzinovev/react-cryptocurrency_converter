import { observable, computed, action, makeObservable} from 'mobx';

class ConverterStore {
    @observable selectedInCoin={
        name:'BTC',
    }
    @computed
    get getSelectedInCoin() {
        return this.selectedInCoin;
    }
    @action
    setSelectedInCoin(name:string) {
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
    setSelectedInPrice(price:number) {
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
    setSelectedOutCoin(name:string) {
        this.selectedOutCoin = {
            name: name
        };
    }
    constructor() {
        makeObservable(this);
    }
}

export default ConverterStore;