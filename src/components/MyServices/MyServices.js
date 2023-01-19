import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import webdesign from "../../../public/assets/images/webdesign.png";
import uiuxdesign from "../../../public/assets/images/uiuxdesign3.jpg";
import mobiledesign from "../../../public/assets/images/mobiledesign.png";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyServices = () => {
  return (
    <Box className="bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 p-10">
      <Container maxWidth="md" className="">
        <Typography variant="h5" className=" font-bold text-cyan-100">
          My Services
        </Typography>
        <Grid container spacing={5} mt={0}>
          <Grid
            item
            xs={6}
            md={4}
            className="transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 duration-300"
          >
            <Item>
              <Image
                src={webdesign}
                alt="Picture of the author"
                width={200}
                height={200}
                className=" mx-auto ease-in duration-300 hover:animate-pulse "
              />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600"
              >
                Web App Design
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            className="transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 duration-300"
          >
            <Item>
              {" "}
              <Image
                src={mobiledesign}
                alt="Picture of the author"
                width={200}
                height={200}
                className=" mx-auto hover:animate-pulse "
              />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600"
              >
                Mobile App Design
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            className="transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 duration-300"
          >
            <Item>
              {" "}
              <Image
                src={uiuxdesign}
                alt="Picture of the author"
                width={200}
                height={200}
                className=" mx-auto ease-in duration-300 hover:animate-pulse "
              />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600"
              >
                UI/UX Design
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MyServices;
