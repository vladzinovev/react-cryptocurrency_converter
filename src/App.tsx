import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const firstBlock={padding:'10px'};

const cryptoInputBox={
  display:'flex',
  alignItems:'center',
  justifyContent:"space-beetwen",
};

function App() {
  
  return (
    <Container style={firstBlock} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div style={cryptoInputBox}>
              <TextField
                error
                id="outlined-error"
                label="Erro"
                defaultValue="Hello"
              />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={20}
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
          </Item>
        </Grid>
        
      </Grid>
    </Container>
    
  );
}

export default App;
