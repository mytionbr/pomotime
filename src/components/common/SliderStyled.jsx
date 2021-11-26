import { Slider } from "@mui/material"
import FieldWrapper from "./FieldWrapper"
import InputLabelStyled from "./InputLabelStyled"
import InputWrapper from "./InputWrapper"
import LabelWrapper from "./LabelWrapper"

const SliderStyled = ({ id, value, handleChange,  label})=>{
    return (
      <FieldWrapper>
       <LabelWrapper>
       <InputLabelStyled
            id={id}
            label={label}
          />
        </LabelWrapper>
          <InputWrapper>
          <Slider defaultValue={50} value={value} onChange={handleChange} aria-label="Default" valueLabelDisplay="auto" />
          </InputWrapper>
      </FieldWrapper>
      
    )
  }
export default SliderStyled