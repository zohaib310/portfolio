import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";

const About = () => {
  return (
    <>
      <Box sx={{ width: "100%" }} className="slider-section-new">
        <Box className="blog-slider">
          <Box className="blog-slider__wrp swiper-wrapper">
            <Box className="blog-slider__item swiper-slide">
              <Box className="blog-slider__img">
                <img
                  src="https://avatars.githubusercontent.com/u/58116471?s=400&u=c59c2b9f6818f7ccf8e77e7d98917c69d857ba6a&v=4"
                  alt=""
                />
              </Box>
              <Box style={{ color: "black" }}>
                <span className="blog-slider__code">26 December 2019</span>
                <Box className="blog-slider__title">Muhammad Abu Sufyan</Box>
                <Box className="blog-slider__text">
                  React Js Developer with 1 years of diverse experience. Firm
                  believer that gives you 100% quality work.
                </Box>
                <a href="#" className="blog-slider__button">
                  READ MORE
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
