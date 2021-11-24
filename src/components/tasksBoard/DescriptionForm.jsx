
import { Button, OutlinedInput, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RootStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection:'column',
  justifyContent: "space-between",
  alignItems: 'flex-end'
}));

const TextAreaStyle = styled(OutlinedInput)(({ theme }) => ({
  width: '100%',
  transition: theme.transitions.create(["box-shadow"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {  boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

export default function DescriptionForm({description,handleChangeDescription, onSave}) {
  const [isChange, setIsChange] = React.useState(false);
  const [value, setValue] = React.useState(description);

  const handleChange = (event)=>{
      const {value} = event.target;
      setIsChange(true);
      setValue(value)
  } 

  const handleSave = ()=>{
      setIsChange(false);
      handleChangeDescription(value);
  }

  return (
    <>
      <RootStyle>
        <TextAreaStyle
            value={value}
            onChange={handleChange}
            placeholder="Descrição..."
            multiline
            rows={4}
        />
        {
            isChange && (
                <Button 
                    onClick={handleSave}
                    variant='contained'
                    sx={{
                        my:1
                    }}>
                    Salvar
                </Button>
            )
        }
      </RootStyle>
    </>
  );
}
