import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <Box className=" bg-neutral-800 rounded" sx={{ color: "white" }}>
      <Box className=" text-center p-5 flex flex-col gap-5">
        <Typography variant="h4" className=" font-mono font-bold">
          Say <span className=" animate-pulse ">Hello</span>
        </Typography>
        <Typography className=" font-mono text-lg">
          I am available for freelance projects, remote work or just discussing
          design, feel free to ping me at
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          className="flex justify-center items-center"
        >
          <SiGmail />
          <Typography className=" font-semibold tracking-widest hover:underline text-amber-700 cursor-pointer">
            cuzawzawmyint@gmail.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
