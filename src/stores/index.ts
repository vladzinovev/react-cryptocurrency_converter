import ConverterStore from "./converterStore";
import CurrenciesStore from "./currenciesStore";



const stores={
    CurrenciesStore:new CurrenciesStore(),
    ConverterStore:new ConverterStore(),
}
export default stores;