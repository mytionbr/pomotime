import { CardHeader, Divider } from '@mui/material'
import React from 'react'
import CardStyled from '../common/CardStyled'
import CartContentStyled from '../common/CartContentStyled'
import SelectStyled from '../common/SelectStyled'
import SliderStyled from '../common/SliderStyled'
import SwitchStyled from '../common/SwitchStyled'

const OPTIONS = [
    {
        value: 'bell',
        name: 'Bell'
    },
    {
        value: 'beep',
        name: 'Beep'
    },
    {
        value: 'chime',
        name: 'Chime'
    },
    {
        value: 'rise',
        name: 'Rise'
    },
    {
        value: 'guitar',
        name: 'Guitar'
    },

]

export default function NotificationsForm() {
    const [playSoundAlarm,setPlaySoundAlarm] = React.useState(false)
    const [volume, setVolume] = React.useState(50)
    const [soundAlarm, setSoundAlarm] = React.useState('bell')



    const handleChangePlaySoundAlarm = (event) => {
        const { value } = event.target;
        setPlaySoundAlarm(value);
    };

    const handleChangeVolume = (event) => {
        const { value } = event.target;
        setVolume(value);
    };

    
    const handleChangeSoundAlarm = (event) => {
        const { value } = event.target;
        setSoundAlarm(value);
    };


    return (
        <CardStyled>
      <CardHeader
        title="Notificações"
        subheader="Defina o tipo de notificacão"
      />
      <Divider />
      <CartContentStyled>
        <SwitchStyled
          id="play-sound-alarm"
          label="Tocar alarme"
          value={playSoundAlarm}
          handleChange={handleChangePlaySoundAlarm}
        />
        <SliderStyled
          id="volume-sound-alarm"
          label="Volume"
          value={volume}
          handleChange={handleChangeVolume}
        />
        <SelectStyled
          id="sound-alarm"
          label="Som"
          value={soundAlarm}
          handleChange={handleChangeSoundAlarm}
          options={OPTIONS}
        />

      </CartContentStyled>
    </CardStyled>
    )
}
