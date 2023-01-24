import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import html from "../../../public/assets/images/skills/html.png";
import css from "../../../public/assets/images/skills/css.png";
import js from "../../../public/assets/images/skills/js.png";
import ts from "../../../public/assets/images/skills/ts.png";
import react from "../../../public/assets/images/skills/react.png";
import redux from "../../../public/assets/images/skills/redux.png";
import tw from "../../../public/assets/images/skills/tw.png";
import bs from "../../../public/assets/images/skills/bs.png";
import mui from "../../../public/assets/images/skills/mui.png";
import mysql from "../../../public/assets/images/skills/mysql.png";
import pssql from "../../../public/assets/images/skills/pssql.png";
import mssql from "../../../public/assets/images/skills/mssql.png";
import node from "../../../public/assets/images/skills/node.png";
import express from "../../../public/assets/images/skills/express.png";
import CircularProgress from "@mui/material/CircularProgress";
import Switch from "@mui/material/Switch";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
}));

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size="4rem"
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

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const TechSkills = () => {
  const [details, setDetails] = React.useState(false);

  const showDetails = () => {
    setDetails(!details);
  };

  const items = [
    {
      name: "Html",
      type: "Frondend",
      value: "73",
      image: html,
      color: "warning",
    },
    {
      name: "Css",
      type: "Frondend ",
      value: "70",
      image: css,
      color: "primary",
    },
    {
      name: "JS",
      type: "Frondend",
      value: "80",
      image: js,
      color: "error",
    },
    {
      name: "Ts",
      type: "Frondend",
      value: "60",
      image: ts,
      color: "warning",
    },
    {
      name: "React",
      type: "Frondend",
      value: "75",
      image: react,
      color: "secondary",
    },
    {
      name: "Redux",
      type: "Frondend",
      value: "75",
      image: redux,
      color: "error",
    },
    {
      name: "TW",
      type: "Tailwind",
      value: "75",
      image: tw,
      color: "success",
    },
    {
      name: "BS",
      type: "Bootstrap",
      value: "75",
      image: bs,
      color: "primary",
    },
    {
      name: "Mui",
      type: "Material",
      value: "75",
      image: mui,
      color: "secondary",
    },
    {
      name: "Nodejs",
      type: "Backend",
      value: "75",
      image: node,
      color: "error",
    },
    {
      name: "Express",
      type: "Backend",
      value: "75",
      image: express,
      color: "success",
    },
    {
      name: "Mysql",
      type: "Database",
      value: "75",
      image: mysql,
      color: "primary",
    },
    {
      name: "Mssql",
      type: "Database",
      value: "75",
      image: mssql,
      color: "warning",
    },
    {
      name: "Postgre",
      type: "Database",
      value: "75",
      image: pssql,
      color: "secondary",
    },
  ];
  return (
    <Box className="bg-black p-10 text-white">
      <Container maxWidth="lg" className="">
        <FormGroup>
          <FormControlLabel
            control={
              <Android12Switch
                className="text-white mb-5"
                onChange={showDetails}
              />
            }
            label={
              <Typography
                variant="subtitle1"
                className="text-sky-200 font-mono mb-5 font-bold text-2xl"
              >
                More
              </Typography>
            }
          />
        </FormGroup>
        {details && (
          <Grid container spacing={3}>
            {items.map((tech) => {
              return (
                <Grid item xs={12} md={4}>
                  <Item>
                    <Stack direction="row" spacing={4}>
                      <Image
                        src={tech.image}
                        alt="Picture of the author"
                        width={60}
                        height={50}
                        className=" rounded-full"
                      />
                      <Stack className="flex-1 text-left">
                        <Typography
                          variant="subtitle1"
                          className=" text-sky-500"
                          sx={{
                            fontWeight: "bold",
                            fontFamily: "monospace",
                            letterSpacing: "2px",
                          }}
                        >
                          {tech.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className="flex-1 text-left"
                          sx={{ fontWeight: "normal", fontFamily: "monospace" }}
                        >
                          {tech.type}
                        </Typography>
                      </Stack>
                      <CircularProgressWithLabel
                        value={tech.value}
                        color={tech.color}
                      />
                    </Stack>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default TechSkills;
