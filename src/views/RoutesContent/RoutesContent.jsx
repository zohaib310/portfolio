import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { Box, Grid, Container } from '@mui/material';

const RoutesContent = ({ routes }) => {
  console.log('Routes ===>', routes);
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item md={2} lg={2} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item md={10} lg={10} xs={12}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RoutesContent;
