import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CryptoTable from './components/CryptoTable';
import ConverterBlock from './components/ConverterBlock';

const firstBlock={padding:'10px'};

function App() {

  return (
    <Container style={firstBlock} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable/>
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock/>
        </Grid>
        
      </Grid>
    </Container>
    
  );
}

export default App;
