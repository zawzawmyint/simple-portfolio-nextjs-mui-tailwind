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
const actions = [
  {
    icon: <DownloadForOfflineIcon className="text-green-700" />,
    name: "Download CV",
  },
  {
    icon: (
      <Link href={"https://github.com/zawzawmyint"}>
        <GitHubIcon className="text-black" />
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
  { icon: <EmailIcon className="text-rose-400" />, name: "Email" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={<FaceIcon className="rounded text-black" />}
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
