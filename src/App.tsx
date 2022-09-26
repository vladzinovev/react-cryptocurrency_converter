import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CryptoTable from './components/CryptoTable';
import ConverterBlock from './components/ConverterBlock';
import { TCoin } from './types';

const firstBlock={padding:'10px'};

function App() {
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
    <Container style={firstBlock} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable items={allCoins}/>
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock/>
        </Grid>
      </Grid>
    </Container>
    
  );
}

export default App;
