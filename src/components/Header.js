import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { SlMenu } from "react-icons/sl";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className=" bg-black " sx={{ color: "white" }}>
      <Stack
        mx={20}
        p={3}
        direction="row"
        spacing={65}
        className="hidden sm:flex"
      >
        <Typography
          variant="subtitle2"
          className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
        >
          Portfolio
        </Typography>
        <Stack direction="row" spacing={3} className=" hidden sm:flex">
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
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Typography>Hello World </Typography>
          <Button onClick={handleClose}>close</Button>
        </Dialog>
      </Stack>

      {/* responseive header  */}
      <Stack
        ml={5}
        p={3}
        direction="row"
        spacing={23}
        className="sm:hidden flex justify-center items-center"
      >
        <Typography
          variant="subtitle2"
          className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
        >
          Portfolio
        </Typography>
        <SlMenu
          fontSize="30px"
          className=" text-sky-300 bg-white  rounded-full"
          onClick={handleClickOpen}
        />
      </Stack>
    </Box>
  );
};
