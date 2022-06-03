import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesContent } from './views';
import routes from './routes';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
      <Box>
        <StyledEngineProvider injectFirst s>
          <Router>
            <RoutesContent routes={routes} />
          </Router>
        </StyledEngineProvider>
      </Box>
    </>
  );
};

export default App;
