import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/assets/images/ProfileImage.jpg";
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaDev } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Box className=" bg-gradient-to-r from-black via-black to-black text-black h-auto py-10 sm:p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 1 },
            }}
            className=" flex flex-col gap-2 sm:mx-32 mx-10  my-10"
          >
            <Typography variant="h5" className="font-bold text-white text-xl">
              Hi! 🙋‍♂️,
            </Typography>
            <Typography variant="h5" className="font-bold text-white text-xl">
              I&apos;m{" "}
              <span className="relative hidden sm:inline-block">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-indigo-300 text-xl">
                  Zaw Zaw Myint
                </span>
                <span className="{` absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change `}"></span>
              </span>
              <span className="relative sm:hidden">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap ">
                  Zaw Myint
                </span>
                <span className="{` absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change`}"></span>
              </span>
            </Typography>
            <Typography variant="h5" className="font-bold text-white text-xl">
              <span
                variant="title"
                className="font-bold ease-in duration-300 normal-case text-violet-50 tracking-wide hover:text-violet-100 text-xl"
              >
                Front
              </span>{" "}
              end developer,
            </Typography>
            <Typography
              mb={2}
              variant="subtitle1"
              className=" ease-in duration-300 normal-case text-sky-200 text-lg  font-bold tracking-wide hover:tracking-widest hover:text-violet-100 font-mono"
            >
              CSS / Javascript / React / NextJs
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                className=" animate-bounce rounded-full  ease-in duration-300 normal-case cursor-pointer  font-bold tracking-wide hover:tracking-widest "
              >
                <Link href={"/contactus"}>Hire me 🔥</Link>
              </Button>
              <Button
                variant="outlined"
                className="ease-in duration-300 normal-case rounded-full   cursor-pointer  font-bold tracking-wide hover:tracking-widest "
              >
                <Link href={"/contactus"}>Contact me</Link>
              </Button>
            </Stack>
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 1 },
              }}
              className="flex gap-3"
              mt={1}
            >
              <Link href={"https://github.com/zawzawmyint"}>
                <GoMarkGithub
                  fontSize="30px"
                  className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"}
              >
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
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className=" mx-auto rounded-full  border-4 border-white border-b-indigo-600 border-t-indigo-600 "
            width={300}
          >
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 1 },
              }}
            >
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={300}
                height={300}
                className=" mx-auto rounded-full  transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
              />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
