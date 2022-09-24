import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, Typography } from '@mui/material';

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

function App() {
  
  return (
    <Container style={firstBlock} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
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
