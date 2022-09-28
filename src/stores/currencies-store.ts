import axios from "axios";
import { observable, computed, action } from "mobx";
import { TCoin } from "../types";

export default class CurrenciesStore {
    //отслеживание состояний (отслеживаем наши обьекты)
    @observable private items: TCoin[]=[];

    //вычисляемое (для создания функций которые вычисляют свое значение из состояния)
    @computed
    get getItems(){
        return this.items;
    }

    //Обновление состояния с помощью действий (помечает метод как действие, которое изменит состояние)
    @action
    setItems=(items:TCoin[]):void=>{
        this.items=items;
    }

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
                this.items=coins;
            })
    }

    /* constructor(initItems:TCoin[]){
        this.items=initItems;
    } */
}

