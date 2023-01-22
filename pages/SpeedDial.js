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
import Link from "next/link";
const actions = [
  {
    icon: <DownloadForOfflineIcon />,
    name: "Download CV",
  },
  {
    icon: (
      <Link href={"https://github.com/zawzawmyint"}>
        <GitHubIcon />
      </Link>
    ),
    name: "Github",
  },
  {
    icon: (
      <Link href={"https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"}>
        <LinkedInIcon />
      </Link>
    ),
    name: "LinkIn",
  },
  { icon: <EmailIcon />, name: "Email" },
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
        icon={<SpeedDialIcon className=" bg-black rounded-full" />}
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
