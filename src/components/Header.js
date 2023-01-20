import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import React from "react";
import { SlMenu } from "react-icons/sl";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";

import { RxCross1 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Header = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className=" bg-black " sx={{ color: "white" }}>
      {!fullScreen && (
        <Stack
          mx={10}
          p={3}
          direction="row"
          spacing={75}
          className=" items-center"
        >
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
          >
            <Link href={"/"}>Portfolio</Link>
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            className=" hidden sm:flex p-2 border-2 border-slate-800 rounded-full shadow-lg shadow-orange-600"
          >
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wide hover:border hover:tracking-widest px-1 rounded-lg  hover:bg-gray-50 hover:text-black"
            >
              <Link href={"/"}>Home</Link>
            </Typography>
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wide hover:border hover:tracking-widest px-1 rounded-lg  hover:bg-gray-50 hover:text-black"
            >
              <Link href={"/about"}>About Me</Link>
            </Typography>
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
            >
              <Link href={"/skills"}>Skills</Link>
            </Typography>
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
            >
              <Link href={"/mywork"}>My Work</Link>
            </Typography>
          </Stack>
        </Stack>
      )}

      {/* responseive header  */}

      {fullScreen && (
        <Stack
          ml={5}
          py={3}
          direction="row"
          spacing={25}
          className="sm:hidden flex justify-center items-center"
        >
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
          >
            <Link href="/">Portfolio</Link>
          </Typography>
          <SlMenu
            fontSize="30px"
            className=" text-sky-300  rounded"
            onClick={handleClickOpen}
            size="20px"
          />

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            transitionDuration={150}
            PaperProps={{
              style: {
                backgroundColor: "gray",
              },
            }}
          >
            <Box className="flex justify-end items-center m-7 ">
              <RxCross1 onClick={handleClose} fontSize="30px" color="white" />
            </Box>

            <Box
              sx={{
                width: "100%",
                bgcolor: "gray",
                color: "lightgrey",
              }}
            >
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/">Home</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/about">About me</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/skills">Skills</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/mywork">My Work</Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Dialog>
        </Stack>
      )}
    </Box>
  );
};
