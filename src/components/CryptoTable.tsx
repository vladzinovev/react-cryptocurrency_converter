import React from "react";
import { Paper } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TCoin } from "../types";

const currencyIcon={
    width:'18px',
    height:'18px',
};

interface ICryptoTable{
    items:TCoin[],
}


const CryptoTable: React.FC<ICryptoTable>=({items})=>{
    
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
                {!items.length ? 'Загрузка...' : items.map((coin) => (
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