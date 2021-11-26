import FieldWrapper from "./FieldWrapper";
import InputLabelStyled from "./InputLabelStyled";
import InputStyled from "./InputStyled";
import InputWrapper from "./InputWrapper";
import LabelWrapper from "./LabelWrapper";

const InputFildStyled = ({ id, value, handleChange, type, label }) => {
    return (
      <FieldWrapper>
        <LabelWrapper>
          <InputLabelStyled
            id={id}
            label={label}
          />
        </LabelWrapper>
        <InputWrapper>
          <InputStyled
            value={value}
            onChange={handleChange}
            id={id}
            type={type}
          />
        </InputWrapper>
      </FieldWrapper>
    );
  };
  


export default InputFildStyled