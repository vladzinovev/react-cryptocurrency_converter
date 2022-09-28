import React from "react";
import ConverterStore from "./converter-store";
import CurrenciesStore from "./currencies-store";

const stores=React.createContext({
    currenciesStore:new CurrenciesStore(),
    converterStore:new ConverterStore(),
})
export default stores;