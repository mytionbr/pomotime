import { alpha, Badge, IconButton, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import MenuPopover from "../../components/MenuPopover";
import { Box } from "@mui/system";

const ItemWrap = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  fontSize: "2rem",
  alignItems:'center',
  borderRadius: theme.shape.borderRadiusMd,
  "& > *":{
    fontWeight: 700
  }
}));

const getIcon = (icon)=>{
    return ()=> icon
}

export default function Insignia({icon,description,name,color}) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <ItemWrap
        ref={anchorRef}
        size="small"
        onClick={handleOpen}
        sx={{
          borderRadius:'50%',  
          color: (theme)=> color,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                color,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        
        {icon}
        
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
