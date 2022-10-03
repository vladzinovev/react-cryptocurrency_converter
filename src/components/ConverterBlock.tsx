/* import React, { useEffect, useState } from "react";
import { Paper, styled } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, Typography } from '@mui/material';
import {observer } from "mobx-react-lite";
import CurrenciesStore from "../stores/currencies-store";
import { useStores } from "../hooks/use-stores";
import { IBlocks, TCoin } from "../types";
import ConverterStore from "../stores/converter-store";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
  
const cryptoInputBox={
    marginTop:'10px',
};
  
const currencyInput={
    minWidth:'65%',
    marginRight:'10px',
};
const currencyType={
    minWidth:'32%',
};

type TReducerState = {
    value1: string;
    value2: string;
    inPrice: number;
    outPrice: number;
};


function reducer(state: TReducerState, action: any): TReducerState {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          [action.payload.name]: action.payload.value,
          value2: String((Number(action.payload.value) * state.inPrice) / state.outPrice),
        };
  
      case 'SET_PRICES':
        return {
          ...state,
          inPrice: action.payload.in,
          outPrice: action.payload.out,
        };
  
      default:
        return state;
    }
}


const ConverterBlock:React.FC<IBlocks>=observer(()=>{
    const {currenciesStore}=useStores();
    const {converterStore}=useStores();
    
    
    const coins:string[]=currenciesStore!.getItems.map(coin=>coin.name);

    const [selectedOutCoin, setSelectedOutCoin] = useState("BTC");
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOutCoin(event.target.value as string );
    };
    const handleClick = (event: any) => {
        converterStore.setSelectedInCoin(event.target.value as string);
        console.log(event.target.value);
    };
    

    const inPrice = converterStore!.getSelectedCoin.price || 19000;
    const outPrice = Number(currenciesStore!.getItems.find(obj => obj.name === selectedOutCoin)!.price as number) || 0;
    //const sname:TCoin[]=currenciesStore.getItems;
    const [state, dispatch] = React.useReducer(reducer, {
        value1: '',
        value2: '',
        inPrice,
        outPrice,
    });
    
    const onUpdateField = (name: string, value: string) => {
        dispatch({
          type: 'SET_VALUE',
          payload: {
            name,
            value,
          },
        });
    };

    useEffect(() => {
        dispatch({
          type: 'SET_PRICES',
          payload: {
            in: inPrice,
            out: outPrice,
          },
        });
    }, [inPrice, outPrice]);

    return (
    <Item>
        <div >
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                value={state.value1}
                label={converterStore!.getSelectedCoin.price} 
                onChange={(e: any) => onUpdateField('value1', e.target.value)}
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={converterStore!.getSelectedInCoin.name}
                onChange={handleClick}
                label="Валюта"
                >
                    {coins.map(name=><MenuItem value={name}>{name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
        <div style={cryptoInputBox}>
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                label="Сумма" 
                value={state.value2}
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                //value={sname.map(sn=>sn.name[0])}
                value={selectedOutCoin}
                label="Валюта"
                >
                    {
                        coins.map(name=><MenuItem value={name}>{name}</MenuItem>)
                    }
                    
                </Select>
            </FormControl>
        </div>
        <Typography mt={2} mb={-1} variant="h5" component="h5">
            {converterStore!.getSelectedCoin.name}
        </Typography>
    </Item>
)})
export default ConverterBlock; */

/* 
const ConverterBlock:React.FC<IConverterBlock>=inject('currenciesStore')(
    observer(({currenciesStore})=>{
        const coins: string[]=currenciesStore!.getItems.map(coin=>coin.name);
        return (
        <Item>
            <div >
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                label="Сумма" 
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Валюта"
                >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div style={cryptoInputBox}>
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                label="Сумма" 
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coins[0]}
                label="Валюта">
                    {coins.map(name=>(
                        <MenuItem value={name}>name</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </div>
            <Typography mt={2} mb={-1} variant="h5" component="h5">
            77,81 Российский рубль
            </Typography>;
        </Item>
    )})
)
export default ConverterBlock; */


import React, { useEffect, useState } from "react";
import { Paper, styled } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, Typography } from '@mui/material';
import {observer } from "mobx-react-lite";
import CurrenciesStore from "../stores/currencies-store";
import { useStores } from "../hooks/use-stores";
import { IBlocks, TCoin } from "../types";
import ConverterStore from "../stores/converter-store";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
  
const cryptoInputBox={
    marginTop:'10px',
};
  
const currencyInput={
    minWidth:'65%',
    marginRight:'10px',
};
const currencyType={
    minWidth:'32%',
};

const ConverterBlock:React.FC<IBlocks>=observer(()=>{
    const {currenciesStore}=useStores();
    const {converterStore}=useStores();
    
    const coins:string[]=currenciesStore!.getItems.map(coin=>coin.name);

    const [selectedOutCoin, setSelectedOutCoin] = useState("BTC");
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOutCoin(event.target.value as string );
        setValue2(findprice());
    };
    const handleClick = (event: any) => {
        converterStore.setSelectedInCoin(event.target.value as string);
        setValue2(findprice());
    };
    
    const [value2,setValue2]=useState(0);
    
    const findprice=()=>{
        const curOutPriceName:any=currenciesStore.getItems.find(coin=>coin.name==selectedOutCoin);
        const curInName:any=currenciesStore.getItems.find(coin=>coin.name==converterStore.getSelectedInCoin.name);
        const curPrice:any=converterStore!.getSelectedInPrice.price*curOutPriceName.price/curInName.price;
        return curPrice;
    }
    
    const PriceClick = (event: any) => {
        converterStore.setSelectedInPrice(event.target.value as string);
        setValue2(findprice());
    };    

    return (
    <Item>
        <div >
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                value={converterStore!.getSelectedInPrice.price}
                label='Введенное значение' 
                onChange={PriceClick}
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={converterStore!.getSelectedInCoin.name}
                onChange={handleClick}
                label="Валюта"
                >
                    {coins.map(name=><MenuItem value={name}>{name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
        <div style={cryptoInputBox}>
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                label="Сумма получаемая" 
                value={value2}
                variant="outlined" />
            </FormControl>
            <FormControl style={currencyType}>
                <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                //value={sname.map(sn=>sn.name[0])}
                value={selectedOutCoin}
                label="Валюта"
                >
                    {
                        coins.map(name=><MenuItem value={name}>{name}</MenuItem>)
                    }
                    
                </Select>
            </FormControl>
        </div>
        <Typography mt={2} mb={-1} variant="h5" component="h5">
            {converterStore!.getSelectedCoin.name}
        </Typography>
    </Item>
)})
export default ConverterBlock;

