import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import youtube from "../../../public/assets/images/youtube1.jpg";
import udemy from "../../../public/assets/images/udemy.png";
import github from "../../../public/assets/images/github.png";
import twitter from "../../../public/assets/images/twitter.jpg";
import mdn from "../../../public/assets/images/mdn.jpg";
import stackoverflow from "../../../public/assets/images/stackoverflow.jpg";
import { useTheme } from "@mui/material";

const AboutMeDetails = () => {
  const theme = useTheme();
  return (
    <Box className="mx-auto bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 text-black h-auto  p-10">
      <Typography variant="h6" className="text-sky-200 font-bold font-Josefin">
        Hello!, Nice to meet you
      </Typography>
      <Typography
        variant="body1"
        className=" text-gray-300 sm:w-3/4 mt-5 font-Josefin"
      >
        {" "}
        I'm Zaw Zaw Myint, and I graduated from the University of Computer
        Studies in 2019 with a degree in Computer Science. My interests are in
        Front End Engineering, and I love to create beautiful and performant
        products with delightful user experiences.
      </Typography>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            className="text-sky-200 font-bold font-Josefin"
          >
            I believe in learning thru experience
          </Typography>
          <Typography
            variant="body1"
            className=" text-gray-300 sm:w-2/3 mt-5 font-Josefin"
          >
            {" "}
            I am always ready to accept new challenges and push my limits. I
            have worked from nascent startup to companies and believe in
            learning from pratical applications.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              {" "}
              <Image
                src={youtube}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 "
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={udemy}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={github}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              {" "}
              <Image
                src={stackoverflow}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 "
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={mdn}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={twitter}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            className="text-sky-200 font-bold font-Josefin"
          >
            I do much more than just work
          </Typography>
          <Typography
            variant="body1"
            className=" text-gray-300 sm:w-2/3 mt-5 font-Josefin"
          >
            {" "}
            Work hard and party harder, this is what I follow. I always try to
            enjoy life its fullest, when I am not designing you can find me
            listening to music, scoring some crazy goals fifa or just getting
            somthing to eat
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              {" "}
              <Image
                src={youtube}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 "
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={udemy}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={github}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              {" "}
              <Image
                src={stackoverflow}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 "
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={mdn}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={twitter}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeDetails;
