import { InputLabel } from "@mui/material"
import { grey } from "@mui/material/colors"

const InputLabelStyled =({id,label})=>{
    return (
      <InputLabel
            htmlFor={id}
            sx={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: grey[800]
            }}
          >
            {label}
          </InputLabel>
    )
  }

export default InputLabelStyled