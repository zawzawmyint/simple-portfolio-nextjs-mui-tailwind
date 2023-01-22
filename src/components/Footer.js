import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <Box
      className=" bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded opacity-80"
      sx={{ color: "white" }}
    >
      <Box className=" text-center p-1 flex flex-col gap-2">
        <Typography variant="h4" className=" font-mono font-bold ">
          Say <span className=" animate-pulse text-green-500">Hello 👋</span>
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
          <Typography className=" font-semibold text-lg tracking-widest hover:underline text-sky-400 cursor-pointer">
            cuzawzawmyint@gmail.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
