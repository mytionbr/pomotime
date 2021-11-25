
import { Button, CardHeader, OutlinedInput, TextField, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RootStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection:'column',
  justifyContent: "space-between",
  alignItems: 'flex-end'
}));
const InputStyle = styled(TextField)(({ theme }) => ({
  width: '100%',
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
        <InputStyle
            value={value}
            onChange={handleChange}
            placeholder="Descrição..."
            multiline
            label="Descrição"
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
