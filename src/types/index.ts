import ConverterStore from "../stores/converter-store";
import CurrenciesStore from "../stores/currencies-store";

export type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
};
  
export type TCoinDiff = { [key: string]: string };

export type IBlocks={
    currenciesStore?: CurrenciesStore;
    converterStore?: ConverterStore;
}