import React, {useEffect, useState} from "react";
import { Paper } from "@mui/material";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const currencyIcon={
    width:'18px',
    height:'18px',
  };

type TCoin={
    name:string,
    fullName:string,
    imageUrl:string,
    price:number,
    volume24Hour:number,
}

const CryptoTable=()=>{
    
    const [allCoins,setAllCoins] = useState<TCoin[]>([]);

    useEffect(()=>{
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
          .then((response)=>{
            setAllCoins(response.data.Data.map((coin:any)=>{
              const obj={
                name:coin.CoinInfo.Name,
                fullName:coin.CoinInfo.FullName,
                imageUrl:`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                price:coin.RAW.USD.PRICE.toFixed(3),
                volume24Hour:coin.RAW.USD.VOLUME24HOUR.toFixed(0),
              };
              
              return obj;
            }));
        })
    },[]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">FullName</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">volume24Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!allCoins.length ? 'Загрузка...' : allCoins.map((coin) => (
                  <TableRow
                    key={coin.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img style={currencyIcon} src={coin.imageUrl} alt='image'></img>
                    </TableCell>
                    <TableCell align="center">{coin.name}</TableCell>
                    <TableCell align="center">{coin.fullName}</TableCell>
                    <TableCell align="center">$ {coin.price}</TableCell>
                    <TableCell align="center">$ {coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
)}
export default CryptoTable;