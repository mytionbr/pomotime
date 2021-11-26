import FieldWrapper from "./FieldWrapper"
import InputLabelStyled from "./InputLabelStyled"
import InputWrapper from "./InputWrapper"
import IOSSwitch from "./IOSSwitch"
import LabelWrapper from "./LabelWrapper"

const SwitchStyled = ({ id, value, handleChange,  label})=>{
    return (
      <FieldWrapper>
       <LabelWrapper>
       <InputLabelStyled
            id={id}
            label={label}
          />
        </LabelWrapper>
          <InputWrapper>
          <IOSSwitch
            value={value}
            handleChange={handleChange}
            id={id}
           />
          </InputWrapper>
      </FieldWrapper>
      
    )
  }
export default SwitchStyled