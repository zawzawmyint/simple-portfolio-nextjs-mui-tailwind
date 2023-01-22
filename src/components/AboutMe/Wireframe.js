import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import aboutme from "../../../public/assets/images/aboutme2.png";
import { useTheme } from "@mui/material/styles";
import useDownloader from "react-use-downloader";
import Link from "next/link";
// import { url } from "../../../public/pdf/a.pdf";

const Wireframe = (props) => {
  const theme = useTheme();

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
    // <Box className="mx-auto bg-black text-black h-auto py-10 sm:p-10">
    <Box className="mx-auto bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 text-black h-auto py-10 sm:p-10">
      <Grid container spacing={2} className="rounded-md p-5 ">
        {show && (
          <Grid item xs={12} md={6}>
            <Box
              className="mx-auto  border-4 border-sky-400  transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 duration-300 rounded-3xl"
              width={300}
            >
              <Image
                src={aboutme}
                alt="Picture of the author"
                width={300}
                height={200}
                className=" mx-auto  transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 rounded-3xl"
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Box className=" flex flex-col gap-5">
            <Typography
              variant="h5"
              className=" font-bold text-cyan-300 font-mono"
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              className="text-sky-200 font-bold font-Josefin"
            >
              Hello!, Nice to meet you
            </Typography>
            <Typography
              variant="body1"
              className=" text-gray-300 sm:w-3/4  font-Josefin tracking-wider"
            >
              {" "}
              I'm Zaw Zaw Myint, and I graduated from the University of Computer
              Studies in 2019 with a degree in Computer Science. My interests
              are in Front End Engineering, and I love to create beautiful and
              performant products with delightful user experiences.
            </Typography>
            <Stack direction="row" spacing={21}>
              <Typography
                variant="body1"
                className=" text-sky-200 font-semibold font-mono"
              >
                Name:
              </Typography>
              <Typography
                variant="body1"
                className=" text-yellow-400 tracking-wider font-mono font-bold"
              >
                Zaw Zaw Myint (Flez)
              </Typography>
            </Stack>
            <Stack direction="row" spacing={14} className="sr-only">
              <Typography
                variant="body1"
                className="font-semibold text-sky-200 font-mono"
              >
                Date of Birth:
              </Typography>
              <Typography
                variant="body1"
                className=" text-yellow-400 tracking-wider font-mono"
              >
                22/04/97
              </Typography>
            </Stack>
            <Stack direction="row" spacing={18} className="sr-only">
              <Typography
                variant="body1"
                className="font-semibold text-sky-200 font-mono"
              >
                Address:
              </Typography>
              <Typography
                variant="body1"
                className=" text-yellow-400 tracking-wider font-mono"
              >
                Yangon
              </Typography>
            </Stack>
            <Stack direction="row" spacing={20}>
              <Typography
                variant="body1"
                className="font-semibold text-sky-200 font-mono"
              >
                Email:
              </Typography>
              <Typography
                variant="body1"
                className="break-all text-yellow-400 tracking-wider font-mono"
              >
                cuzawzawmyint@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={20}>
              <Typography
                variant="body1"
                className="font-semibold text-sky-200 font-mono"
              >
                Phone:
              </Typography>
              <Typography
                variant="body1"
                className=" text-yellow-400 tracking-wider font-mono"
              >
                09-978205997
              </Typography>
            </Stack>
            <Box>
              <Button
                variant="outlined"
                className="normal-case rounded-3xl text-amber-700 transition ease-in delay-75 hover:-translate-y-1 hover:scale-110 duration-300 font-mono"
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
