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

    const [selectedOutCoin, setSelectedOutCoin] = useState("USD");
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOutCoin(event.target.value as string );
    };
    const handleClick = (event: any) => {
        converterStore.setSelectedInCoin(event.target.value as string);
        console.log(event.target.value);
    };
    
    //const sname:TCoin[]=currenciesStore.getItems;
    
    

    return (
    <Item>
        <div >
            <FormControl style={currencyInput}>
                <TextField 
                fullWidth
                label={converterStore!.getSelectedCoin.price} 
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
                    <MenuItem value="USD">USD</MenuItem>
                    {
                        coins.map(name=><MenuItem value={name}>{name}</MenuItem>)
                    }
                    {/* {
                        sname.map(sn=><MenuItem value={sn.name}>{sn.name}</MenuItem>)
                    } */}
                </Select>
            </FormControl>
        </div>
        <Typography mt={2} mb={-1} variant="h5" component="h5">
            {converterStore!.getSelectedCoin.name}
        </Typography>
    </Item>
)})
export default ConverterBlock;

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




