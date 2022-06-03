import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box
        className="full-section "
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            height: "40vh",
            width: "90vh",
            background: "white",
            borderRadius: "24px",
          }}
        >
          <Typography variant="h1">Contact</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
