import { alpha, Badge, IconButton, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import MenuPopover from "../../components/MenuPopover";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

const ItemWrap = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  fontSize: "2rem",
  alignItems:'center',
  borderRadius: theme.shape.borderRadiusMd,
  justifyContent: 'center',
  "& > *":{
    fontWeight: 700
  }
}));

export default function TopicPopover({icon,total,description,name,color}) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [totalContent,setTotalContent] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setTotalContent(total)
  },[total])

  return (
    <>
      <ItemWrap
        ref={anchorRef}
        size="large"
        onClick={handleOpen}
        sx={{
          color: (theme)=> theme.palette.topics[color],
          "&>*":{
            marginRight: 1
          },
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.topics[color],
                theme.palette.action.focusOpacity
              ),
            }),
        }}
      >
        
          {icon}
          <Typography variant="h6" sx={{color: grey[600]}}>
            {total}
          </Typography>
          
        </ItemWrap>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">{name[0].toUpperCase() + name.slice(1,name.length)}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </MenuPopover>
    </>
  );
}
