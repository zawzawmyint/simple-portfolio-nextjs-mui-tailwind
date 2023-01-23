import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FaceIcon from "@mui/icons-material/Face";
import Link from "next/link";
import axios from "axios";

export default function BasicSpeedDial() {
  const [email, setEmail] = React.useState("cuzawzawmyint@gmail.com");
  const sendMail = async (e) => {
    e.preventDefault();
    // console.log("hello world");
    axios
      .post("http://localhost:3000/api/emaill", { email })
      .then((res) => {
        alert("Send Mail To You");
        setEmail("");
      })
      .catch((e) => console.log(e));
  };

  const actions = [
    {
      icon: (
        <Link href="/files/ZawZawMyintCV.pdf" locale={false} download>
          <DownloadForOfflineIcon className="text-green-700" />
        </Link>
      ),
      name: "Download CV",
    },
    {
      icon: (
        <Link href={"https://github.com/zawzawmyint"}>
          <GitHubIcon className="text-white shadow-2xl shadow-white " />
        </Link>
      ),
      name: "Github",
    },
    {
      icon: (
        <Link href={"https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"}>
          <LinkedInIcon className=" text-cyan-600" />
        </Link>
      ),
      name: "LinkIn",
    },
    {
      icon: <EmailIcon onClick={sendMail} className="text-rose-400" />,
      name: "Email",
    },
  ];
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={
          <FaceIcon className="rounded-full bg-white text-black text-5xl animate-pulse" />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
