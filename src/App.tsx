import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const firstBlock={padding:'10px'};

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


/* 
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
 */

type TCoin={
  name:string,
  fullName:string,
  imageUrl:string,
  price:number,
  volume24hour:number,


}

function App() {
  
  const [allCoins,setAllCoins] = useState<TCoin[]>([]);

  useEffect(()=>{
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then((response)=>{
        setAllCoins(response.data.Data.map((coin:any)=>{
          const obj={
            name:coin.CoinInfo.Name,
            fullName:coin.CoinInfo.fullName,
            imageUrl:coin.CoinInfo.ImageUrl,
            price:coin.CoinInfo.DISPLAY.USD.PRICE,
            volume24Hour:coin.CoinInfo.DISPLAY.USD.VOLUME24HOUR,
          };
          
          return obj;
        }));
      })
  },[]);

  return (
    <Container style={firstBlock} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">FullName</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">volume14hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
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
                  value={10}
                  label="Валюта"
                >
                  <MenuItem value={10}>USD</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography mt={2} mb={-1} variant="h5" component="h5">
              77,81 Российский рубль
            </Typography>;
          </Item>
        </Grid>
        
      </Grid>
    </Container>
    
  );
}

export default App;
