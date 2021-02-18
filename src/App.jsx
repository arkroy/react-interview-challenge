import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Wizard from './components/templates/WizardMaster';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Wizard />
      </Container>
    </>
  );
}

export default App;
