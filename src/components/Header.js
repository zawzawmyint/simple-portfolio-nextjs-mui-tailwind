import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box className=" bg-black " sx={{ color: "white" }}>
      <Stack mx={20} p={3} direction="row" spacing={65}>
        <Typography
          variant="subtitle2"
          className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
        >
          Portfolio
        </Typography>
        <Stack direction="row" spacing={3}>
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wide hover:border hover:tracking-widest px-1 rounded-lg  hover:bg-gray-50 hover:text-black"
          >
            About Me
          </Typography>
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
          >
            Skills
          </Typography>
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
          >
            My Work
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
