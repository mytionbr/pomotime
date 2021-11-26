import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import FieldWrapper from "./FieldWrapper";
import InputLabelStyled from "./InputLabelStyled";
import InputWrapper from "./InputWrapper";
import LabelWrapper from "./LabelWrapper";

const SelectModified = ({ id, handleChange, label, options, value }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const SelectStyled = ({ id, value, handleChange, label, options }) => {
  return (
    <FieldWrapper>
      <LabelWrapper>
        <InputLabelStyled id={id} label={label} />
      </LabelWrapper>
      <InputWrapper>
        <SelectModified
          id={id}
          label={label}
          value={value}
          handleChange={handleChange}
          options={options}
        />
      </InputWrapper>
    </FieldWrapper>
  );
};
export default SelectStyled;
