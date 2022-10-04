import axios from "axios";
import { observable, computed, action, makeObservable} from "mobx";
import { TCoin, TCoinDiff } from "../types";

class CurrenciesStore {
    //отслеживание состояний (отслеживаем наши обьекты)
    @observable private items: TCoin[]=[];
    @observable private diffObj: TCoinDiff = {};

    constructor() {
        makeObservable(this);
    }

    //вычисляемое (для создания функций которые вычисляют свое значение из состояния)
    @computed
    get getItems(){
        return this.items;
    }
    @computed
    get getDiffObj() {
        return this.diffObj;
    }

    //Обновление состояния с помощью действий (помечает метод как действие, которое изменит состояние)
    @action
    setItems=(items:TCoin[]):void=>{
        this.diffObj = this.diffCurrencies(this.items, items).reduce(
            (initObj: TCoinDiff, obj: TCoin) => {
              const newObj: TCoin = items.find(o => o.name === obj.name)!;
              const oldObj: TCoin = this.items.find(itemObj => itemObj.name === newObj.name)!;
              const color: string =
                newObj.price === oldObj.price ? '' : newObj.price > oldObj.price ? 'green' : 'red';
      
              initObj[newObj.name] = color;
      
              return initObj;
            },{},
        );
        this.items=items;
    };

    @action
    fetchCoins=()=>{
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then((response)=>{
                const coins:TCoin[]=response.data.Data.map((coin:any)=>{
                    const obj:TCoin={
                        name:coin.CoinInfo.Name,
                        fullName:coin.CoinInfo.FullName,
                        imageUrl:`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                        price:coin.RAW.USD.PRICE.toFixed(3),
                        volume24Hour:coin.RAW.USD.VOLUME24HOUR.toFixed(0),
                    };
                    
                    return obj;
                    });
                this.setItems(coins);
            });
    };
    
    diffCurrencies(arr1: TCoin[], arr2: TCoin[]) {
        return arr1.filter((obj, index) => {
          if (obj.price !== arr2[index].price) {
            return true;
          }
          return false;
        });
    }
}
export default CurrenciesStore;
