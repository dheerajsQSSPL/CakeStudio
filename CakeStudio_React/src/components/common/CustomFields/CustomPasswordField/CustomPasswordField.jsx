import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./CustomPasswordField.css";

const CustomPasswordField = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  error = false,
  helperText = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      type={showPassword ? "text" : "password"}
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      error={error}
      helperText={helperText}
      className="custom-password-field"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default CustomPasswordField;