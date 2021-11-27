import {
  Avatar,
  alpha,
  Tooltip,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import { styled } from "@mui/system";
import React from "react";
import MenuPopover from "../MenuPopover";

const ItemWrap = styled(IconButton)(({ theme }) => ({
  display: "flex",
  fontSize: "2rem",
  alignItems: "center",
  borderRadius: "50%",
  justifyContent: "center",
  "& > *": {
    fontWeight: 700,
  },
}));

const AchievementIcon = ({ icon, active, color }) => {
  console.log(active)
  return (
    <Avatar
      sx={{
        backgroundColor: (theme) => (active ? theme.palette.topicsLight[color] : "#817f7f"),
        color: (theme) => (active ? theme.palette.topics[color] : "#fff"),
        width: 70,
        height: 70,
        fontSize: 35,
        backgroundImage:  (theme) => active ? `linear-gradient(135deg, ${alpha(theme.palette.topics[color], 0)} 0%, ${alpha(
          theme.palette.topics[color],
          0.24
        )} 100%)` : 
        `linear-gradient(135deg, ${alpha("#817f7f", 0)} 0%, ${alpha(
          "#817f7f",
          0.24
        )} 100%)`,
      }}
     
    >
      <i className={`ra ${icon}`} />
    </Avatar>
  );
};

export default function Achievement({
  color,
  name,
  description,
  total,
  icon,
  active,
}) {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={name}>
        <ItemWrap
          ref={anchorRef}
          size="large"
          onClick={handleOpen}
          sx={{
            color: (theme) => theme.palette.topics[color],
          
            ...(open && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.topics[color],
                  theme.palette.action.focusOpacity
                ),
            }),
          }}
        >
          <AchievementIcon icon={icon} active={active} color={color} />
        </ItemWrap>
        </Tooltip>
        <MenuPopover
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}
          sx={{ width: 360 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">
                {name[0].toUpperCase() + name.slice(1, name.length)}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </MenuPopover>
    </>
  );
}
