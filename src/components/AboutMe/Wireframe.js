import {
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import aboutme from "../../../public/assets/images/aboutme3.png";
import { useTheme } from "@mui/material/styles";
import useDownloader from "react-use-downloader";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

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

const Wireframe = (props) => {
  const theme = useTheme();

  const [details, setDetails] = React.useState(false);

  const showDetails = () => {
    setDetails(!details);
  };

  // set mobile responsive
  const mobileview = useMediaQuery(theme.breakpoints.down("md"));
  let show = false;

  // show photo in home or not
  if (props.view === "home" && !mobileview) {
    show = true;
  }

  if (props.view === "about") {
    show = true;
  }

  return (
    <Box className="mx-auto bg-black text-black h-auto py-10 sm:p-10">
      {/* <Box className="mx-auto bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-100 text-black h-auto py-10 sm:p-10"> */}
      <Grid container spacing={2} className="rounded-md p-5 ">
        {show && (
          <Grid item xs={12} md={6}>
            <Box
              className="mx-auto  border-2 border-sky-400  transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 duration-300 rounded-xl"
              width={250}
            >
              <Image
                src={aboutme}
                alt="Picture of the author"
                width={250}
                height={200}
                className=" mx-auto  transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 rounded-xl"
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Box className=" flex flex-col gap-3">
            <Typography
              variant="h5"
              className=" font-bold text-cyan-300 font-Josefin"
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              className="text-sky-200 font-bold font-Josefin"
            >
              Hello!, Nice to meet you
            </Typography>
            <CardContent className=" shadow-xl bg-gray-900 rounded-lg">
              <Typography
                variant="body1"
                className="first-letter:ml-3 first-line:tracking-widest
                first-letter:text-3xl text-gray-300 sm:w-3/4  font-Josefin tracking-wider "
              >
                I'm Zaw Zaw Myint, and I graduated from the University of
                Computer Studies in 2019 with a degree in Computer Science. My
                interests are in Front End Engineering, and I love to create
                beautiful and performant products with delightful user
                experiences.
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Android12Switch
                      className="text-white"
                      onChange={showDetails}
                    />
                  }
                  label={
                    <Typography
                      variant="subtitle1"
                      className="text-white font-mono"
                    >
                      Details
                    </Typography>
                  }
                />
              </FormGroup>
              {details && (
                <Box className=" flex flex-col gap-3">
                  <Stack direction="row" spacing={15}>
                    <Typography
                      variant="body1"
                      className=" text-sky-200 font-semibold font-mono"
                    >
                      Name:
                    </Typography>
                    <Typography
                      variant="body1"
                      className=" text-gray-200 tracking-wider font-mono font-bold"
                    >
                      Zaw Zaw Myint (Flez)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={10} className="sr-only">
                    <Typography
                      variant="body1"
                      className="font-semibold text-sky-200 font-mono"
                    >
                      Date of Birth:
                    </Typography>
                    <Typography
                      variant="body1"
                      className=" text-gray-200 tracking-wider font-mono"
                    >
                      22/04/97
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={12} className="">
                    <Typography
                      variant="body1"
                      className="font-semibold text-sky-200 font-mono"
                    >
                      Address:
                    </Typography>
                    <Typography
                      variant="body1"
                      className=" text-gray-200 tracking-wider font-mono"
                    >
                      Yangon
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={14}>
                    <Typography
                      variant="body1"
                      className="font-semibold text-sky-200 font-mono"
                    >
                      Email:
                    </Typography>
                    <Typography
                      variant="body1"
                      className="break-all text-gray-200 tracking-widest font-mono "
                    >
                      cuzawzawmyint@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={14}>
                    <Typography
                      variant="body1"
                      className="font-semibold text-sky-200 font-mono "
                    >
                      Phone:
                    </Typography>
                    <Typography
                      variant="body1"
                      className=" text-gray-200 tracking-wider font-mono"
                    >
                      09-978205997
                    </Typography>
                  </Stack>
                </Box>
              )}
            </CardContent>
            <Box>
              <Button
                variant="outlined"
                className="normal-case rounded-3xl text-amber-300 transition ease-in delay-75 hover:-translate-y-1 hover:scale-110 duration-300 font-mono"
              >
                <Link href="/files/ZawZawMyintCV.pdf" locale={false} download>
                  Download CV
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wireframe;
