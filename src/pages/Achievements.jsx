import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Achievement from "../components/achievements/Achievement";
import Page from "../components/Page";

const ACHIEVEMENTS = [
    {
        name:  'Firme como aço',
        description:'Acumular 5 horas em pomodoros em um dia',
        icon: 'ra-muscle-fat',
        color: 'tasks',
        active: true
    },
    {
        name:  'Consciente',
        description:'Acumular 30 pomodoros sem atrasar nas pausas',
        icon: 'ra-aware',
        color: 'shortBreak',
        active: true
    },
    {
        name:  'Aura',
        description:'Fiquei sem ideias',
        icon: 'ra-aura',
        color: 'tasks',
        active: false
    },
    {
        name:  'Double team',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-double-team',
        color: 'longBreak',
        active: true
    },
    {
        name:  'Player lift',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-player-lift',
        color: 'tasks',
        active: false
    },
    {
        name:  'Crown of tshorns',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-crown-of-thorns',
        color: 'tasks',
        active: false
    },
    {
        name:  'Castle flag',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-castle-flag',
        color: 'tasks',
        active: false
    },
    {
        name:  'Moon sun',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: ' ra-moon-sun',
        color: 'tasks',
        active: false
    },
    {
        name:  'Player teleport',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-player-teleport',
        color: 'hourTotal',
        active: true
    },
    {
        name:  'Player pyromaniac',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: ' ra-player-pyromaniac',
        color: 'done',
        active: true
    },
    {
        name:  'Snake',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-snake',
        color: 'done',
        active: false
    },
    {
        name:  'Butterfly',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-butterfly',
        color: 'done',
        active: false
    },
    {
        name:  'Butterfly',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-butterfly',
        color: 'done',
        active: false
    },
    {
        name:  'Cat',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-cat',
        color: 'rose',
        active: true
    },
    {
        name:  'Aries',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-aries',
        color: 'rose',
        active: false
    },
    {
        name:  'Aquarius',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-aquarius',
        color: 'rose',
        active: false
    },
    {
        name:  'Sagittarius',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-sagittarius',
        color: 'rose',
        active: false
    },
    {
        name:  'Leo',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-leo',
        color: 'royal',
        active: true
    },
    {
        name:  'Virgo',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-virgo',
        color: 'royal',
        active: false
    },
    {
        name:  'Taurus',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-taurus',
        color: 'royal',
        active: false
    },
    {
        name:  'Gemini',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-gemini',
        color: 'spearmint',
        active: true
    },
    {
        name:  'libra',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: ' ra-libra',
        color: 'spearmint',
        active: false
    },
    {
        name:  'Capricorn',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-capricorn',
        color: 'spearmint',
        active: false
    },
    {
        name:  'Cancer',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-cancer',
        color: 'orange',
        active: true
    },
    {
        name:  'Blaster',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-blaster',
        color: 'orange',
        active: false
    },
    {
        name:  'Heartburn',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-heartburn',
        color: 'salmon',
        active: true
    },
    {
        name:  'Bleeding eye',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-bleeding-eye',
        color: 'salmon',
        active: false
    },
    {
        name:  'Crystal ball',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-crystal-ball',
        color: 'salmon',
        active: false
    },
    {
        name:  'Droplet',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: ' ra-droplet',
        color: 'silver',
        active: true
    },
    {
        name:  'Crystal ball',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-crystal-ball',
        color: 'salmon',
        active: false
    },
    {
        name:  'Droplet splash',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-droplet-splash',
        color: 'salmon',
        active: false
    },
    {
        name:  'Fire ring',
        description:'Fiquei sem ideias, alguma sugestão?',
        icon: 'ra-fire-ring',
        color: 'silver',
        active: false
    },
]

export default function Achievements() {
  return (
    <Page title="Perfil | Pomotime">
      <Container maxWidth="xl">
        <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Conquistas</Typography>
        </Box>
        <Grid container sx={{ pt: 5 }} maxWidth='md' justifyContent={"center"} spacing={3}>
            {
                ACHIEVEMENTS.map(item => (
                    <Grid item  md={2} sm={4}>
                        <Achievement 
                            name={item.name}
                            description={item.description}
                            icon={item.icon}
                            color={item.color}
                            active={item.active}
                        />
                    </Grid>
                ))
            }
        </Grid>
      </Container>
    </Page>
  );
}
