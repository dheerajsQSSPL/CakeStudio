import { Button } from "@mui/material";
import "./PrimaryButton.css";

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <Button
      fullWidth
      variant="contained"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="primary-btn"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;