import { observable,computed,action } from "mobx";
import { TCoin } from "../types";

class CurrenciesStore {
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

    /* constructor(initItems:TCoin[]){
        this.items=initItems;
    } */
}
export default CurrenciesStore;

