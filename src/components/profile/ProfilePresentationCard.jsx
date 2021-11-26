import { Avatar, Divider, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box, styled } from "@mui/system";
import React from "react";
import account from "../../_mocks_/account";
import CardStyled from "../common/CardStyled";
import Insignia from "./Insignia";

const ProfileCardHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const ItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
 
}));

const ItemFooter = ({ title, value }) => {
  return (
    <ItemWrapper>
      <Typography variant="subtitle2" sx={{color: grey[600], fontWeight: 400}}>{title}</Typography>
      <Typography variant="body2" sx={{fontWeight: 700}}>{value}</Typography>
    </ItemWrapper>
  );
};

const FooterWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: '100%',
    borderTop: `1px solid ${grey[300]}`,
    padding: '10px 0'
  }));

const CardFooter = ({level,xp,pomocoins}) => {
  return (
    <>
      <FooterWrapper>
        <ItemFooter title="Level" value={level} />
        <ItemFooter title="Pomocoins" value={pomocoins} />
        <ItemFooter title="XP" value={xp} />
      </FooterWrapper>
    </>
  );
};

const insignias = [
    {
        name:'Dragon',
        description: 'Chegou aos 3000 xp',
        icon: <i className="ra ra-dragon"></i>,
        color: '#FF4842'
    },
    {
        name:'Invencível',
        description: 'Chegou a 1 hora sem pausas',
        icon: <i className="ra ra-defibrillate" />,
        color: '#1890FF'
    },
    {
        name:'Ligado no 220',
        description: 'Fez 20 pomodoros em um dia',
        icon: <i className="ra ra-battery-black" />,
        color: '#FFC107'
    }
]

export default function ProfilePresentationCard() {
  return (
    <CardStyled>
      <Stack
        direction="column"
        alignItems="center"
        spacing={4}
      >
          <Paper sx={{borderRadius: '50%', borderColor: grey[300]}} variant="outlined">
        <Avatar sx={{width: 100, height: 100}} src={account.photoURL} alt="photoURL" />
        </Paper>
        <Box sx={{ ml: 2 }}>
          <Typography variant="h5" >{account.displayName}</Typography>
          <Typography variant="body2">{account.role}</Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          {insignias.map((item) => (
            <Insignia
              name={item.name}
              color={item.color}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Stack>

      <CardFooter 
        level={account.level}
        xp={account.xp}
        pomocoins={account.pomocoins} />
      </Stack>
    </CardStyled>
  );
}
