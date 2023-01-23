import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  return (
    <Box className="bg-black h-auto relative">
      <iframe
        src="https://maps.google.com/maps?q=Myanmar%20Web%20creator&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        id="gmap_canvas"
        className="h-[500px] w-full shadow-lg rounded border-none"
      ></iframe>
      <Box className="  h-96"></Box>
      <Box className="  h-28"></Box>
      <Container
        maxWidth="md"
        className=" bg-gray-700 rounded-xl absolute top-64 sm:top-96 sm:left-52"
      >
        <Typography
          variant="subtitle1"
          className=" text-white m-3 font-bold text-lg"
        >
          Let's Keep In Touch
        </Typography>
        <Divider className=" bg-white w-60" />
        <CardContent className=" rounded-xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className=" bg-gray-700">
              <Typography variant="subtitle1" className="text-white">
                Our Contacts
              </Typography>
              <Typography
                variant="body2"
                className=" text-white mt-10 flex justify-start items-end "
              >
                <LocationOnIcon fontSize="small" /> New Youk City, America
              </Typography>
              <Typography
                variant="body2"
                className=" text-white flex justify-start items-end mt-5"
              >
                <LocalPhoneIcon fontSize="small" /> 099876556
              </Typography>
              <Typography
                variant="body2"
                className=" text-white flex justify-start items-end my-5 "
              >
                <EmailIcon fontSize="small" /> cuzawzawmyint@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className=" bg-white rounded-lg">
              <Typography
                variant="subtitle1"
                className=" text-black font-bold font-mono"
              >
                Send us a message
              </Typography>
              <Box
                sx={{
                  width: 350,
                  maxWidth: "100%",
                }}
                className="flex flex-col gap-3 my-5"
              >
                <TextField
                  size="small"
                  fullWidth
                  label="Your Name"
                  id="yourname"
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Email Address"
                  id="email"
                  sx={{ borderRadius: 150 }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Whatsapp"
                  id="whatsapp"
                />
                <TextField
                  fullWidth
                  rows="100"
                  label="Write Message"
                  id="message"
                />
              </Box>
              <Box m={2}>
                <Button
                  size="small"
                  variant="outlined"
                  className=" normal-case rounded-xl"
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </Box>
  );
};

export default ContactUs;
