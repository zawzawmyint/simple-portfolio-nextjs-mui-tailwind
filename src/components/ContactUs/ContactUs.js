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
import { useState } from "react";

const ContactUs = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(fullname, email, subject, message);
  };
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
          className=" text-white font-bold text-lg"
          sx={{ margin: 2, fontFamily: "monospace" }}
        >
          Let's Keep In Touch
        </Typography>
        <Divider className=" bg-white w-60" />
        <CardContent className=" rounded-xl">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              className=" bg-gray-700"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                variant="subtitle1"
                className="text-white"
                sx={{ fontFamily: "monospace" }}
              >
                Our Contacts
              </Typography>
              <Typography
                variant="body2"
                className=" text-white flex justify-start items-end "
                sx={{ marginTop: 5, fontFamily: "monospace" }}
              >
                <LocationOnIcon fontSize="small" /> New Youk City, America
              </Typography>
              <Typography
                variant="body2"
                className=" text-white flex justify-start items-end "
                sx={{ marginTop: 3, fontFamily: "monospace" }}
              >
                <LocalPhoneIcon fontSize="small" /> 099876556
              </Typography>
              <Typography
                variant="body2"
                className=" text-white flex justify-start items-end "
                sx={{ marginY: 3, fontFamily: "monospace" }}
              >
                <EmailIcon fontSize="small" /> cuzawzawmyint@gmail.com
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className=" bg-white rounded-lg text-center "
              sx={{ marginLeft: { xs: 2, md: 0 } }}
            >
              <Typography
                variant="subtitle1"
                className=" text-black font-bold font-mono"
                sx={{ fontFamily: "monospace" }}
              >
                Send us a message
              </Typography>
              <Box
                sx={{
                  maxWidth: "95%",
                }}
                className="flex flex-col gap-3 my-5"
              >
                <TextField
                  size="small"
                  fullWidth
                  label="Full Name"
                  id="yourname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Email Address"
                  id="email"
                  sx={{ borderRadius: 150 }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Subject"
                  id="whatsapp"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  rows="3"
                  multiline={true}
                  label="Write Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Box>
              <Box m={2}>
                <Button
                  size="small"
                  variant="outlined"
                  className=" normal-case rounded-xl"
                  sx={{ fontFamily: "monospace" }}
                  onClick={handleSubmit}
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
