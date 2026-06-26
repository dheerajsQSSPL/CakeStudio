import { TextField } from "@mui/material";
import "./CustomTextField.css";

const CustomTextField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="custom-text-field"
      {...props}
    />
  );
};

export default CustomTextField;