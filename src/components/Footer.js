import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";

import { SiGmail } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <Box className=" bg-black bg-opacity-90" sx={{ color: "white" }}>
      <Box className=" text-center p-1 flex flex-col gap-2">
        <Typography
          variant="h6"
          className=" font-mono font-bold "
          sx={{ fontFamily: "monospace" }}
        >
          Contact me
          {/* Say <span className=" animate-pulse text-gray-200">Hello 👋</span> */}
        </Typography>
        <Typography
          sx={{ fontFamily: "monospace" }}
          className=" font-mono text-lg sr-only"
        >
          I am available for freelance projects, remote work or just discussing
          design, feel free to ping me at
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          mt={1}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Link href={"https://github.com/zawzawmyint"}>
            <GoMarkGithub
              fontSize="30px"
              className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"}>
            <TiSocialLinkedinCircular
              fontSize="30px"
              className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
            />
          </Link>
          <Link href={"https://twitter.com/ZmMusk"}>
            <AiFillTwitterCircle
              fontSize="30px"
              className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
            />
          </Link>
          <Link href={"https://www.instagram.com/cu_zaw_zaw_myint/"}>
            <RiInstagramFill
              fontSize="30px"
              className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
            />
          </Link>
          <Link href={"https://dev.to/zawzawmyint"}>
            <FaDev
              fontSize="30px"
              className=" text-sky-300 bg-black hover:animate-bounce rounded-full font-mono"
            />
          </Link>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          className="flex justify-center items-center"
        >
          <SiGmail />
          <Link href={"/contactus"}>
            <Typography
              // sx={{ fontFamily: "monospace" }}
              className=" font-semibold text-lg tracking-widest hover:underline text-sky-400 cursor-pointer"
            >
              cuzawzawmyint@gmail.com
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
