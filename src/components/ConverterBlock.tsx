import React, { useEffect, useState } from "react";
import { Paper, styled } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, Typography } from '@mui/material';
import {observer } from "mobx-react-lite";
import { useStores } from "../hooks/use-stores";
import { IBlocks} from "../types";

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
    const {converterStore,currenciesStore}=useStores();
    
    const coins:string[]=currenciesStore!.getItems.map(coin=>coin.name);
    const handleChange = (event: SelectChangeEvent) => {
        converterStore.setSelectedOutCoin(event.target.value as string);
        setValue2(findprice());
    };
    const handleClick = (event: SelectChangeEvent) => {
        converterStore.setSelectedInCoin(event.target.value as string);
        setValue2(findprice());
    };
    
    const [value2,setValue2]=useState(0);
    
    const findprice=()=>{
        const curOutPriceName:any=currenciesStore.getItems.find(coin=>coin.name==converterStore.getSelectedOutCoin.name);
        const curInPriceName:any=currenciesStore.getItems.find(coin=>coin.name==converterStore.getSelectedInCoin.name);
        const curPrice:any=converterStore!.getSelectedInPrice.price*curInPriceName.price/curOutPriceName.price;
        return curPrice;
    }

    const PriceClick = (event: any) => {
        converterStore.setSelectedInPrice(event.target.value as number);
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
                value={converterStore.getSelectedOutCoin.name}
                label="Валюта"
                >
                    {coins.map(name=><MenuItem value={name}>{name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
        
    </Item>
)})
export default ConverterBlock;

