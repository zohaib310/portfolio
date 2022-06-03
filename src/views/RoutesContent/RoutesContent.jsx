import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Box, Grid, Container, Button } from "@mui/material";

const RoutesContent = ({ routes }) => {
  console.log("Routes ===>", routes);
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex" }}>
          <Box color="default" className="width-sm-grid">
            <Sidebar />
          </Box>
          <Box className="width-full-grid">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RoutesContent;
