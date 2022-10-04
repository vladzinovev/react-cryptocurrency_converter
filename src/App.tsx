import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
