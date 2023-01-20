import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import webdesign from "../../../public/assets/images/webdesign.png";
import uiuxdesign from "../../../public/assets/images/uiuxdesign3.jpg";
import mobiledesign from "../../../public/assets/images/mobiledesign.png";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size="6rem"
        color={props.color}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize={20}
          className=" font-mono"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const MySkills = () => {
  const [progress1, setProgress1] = React.useState(73);
  const [progress2, setProgress2] = React.useState(70);
  const [progress3, setProgress3] = React.useState(80);
  const [progress4, setProgress4] = React.useState(75);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) =>
  //         prevProgress >= 100 ? 0 : prevProgress + 10
  //       );
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <Box className="bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 p-10">
      <Container maxWidth="lg" className="">
        <Typography variant="h5" className=" font-bold text-cyan-100 font-mono">
          My Skills
        </Typography>
        <Grid container spacing={2} mt={4}>
          <Grid
            item
            xs={6}
            md={3}
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
          >
            <Item>
              <CircularProgressWithLabel value={progress1} color="warning" />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600 font-mono"
              >
                Html
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
          >
            <Item>
              {" "}
              <CircularProgressWithLabel value={progress2} color="primary" />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600 font-mono"
              >
                CSS
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
          >
            <Item>
              {" "}
              <CircularProgressWithLabel value={progress3} color="error" />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600 font-mono"
              >
                JavaScript
              </Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
          >
            <Item>
              {" "}
              <CircularProgressWithLabel value={progress4} color="secondary" />
              <Typography
                variant="body1"
                className=" font-bold mt-2 text-slate-600 font-mono"
              >
                React
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MySkills;
