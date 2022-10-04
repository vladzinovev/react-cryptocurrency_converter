import { createContext } from "react";
import ConverterStore from "./converter-store";
import CurrenciesStore from "./currencies-store";

const stores=createContext({
    currenciesStore:new CurrenciesStore(),
    converterStore:new ConverterStore(),
})
export default stores; 