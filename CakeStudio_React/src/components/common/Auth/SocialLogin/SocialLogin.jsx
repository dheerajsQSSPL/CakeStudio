import { Box, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./SocialLogin.css";

const SocialLogin = () => {
  const handleSocialLogin = (provider) => {
    alert(`${provider} login is not implemented yet.`);
  };

  return (
    <Box className="social-login">
      <Button
        fullWidth
        variant="outlined"
        className="social-btn"
        startIcon={<GoogleIcon className="google-icon" />}
        onClick={() => handleSocialLogin("Google")}
      >
        Continue with Google
      </Button>

      <Button
        fullWidth
        variant="outlined"
        className="social-btn"
        startIcon={<FacebookIcon className="facebook-icon" />}
        onClick={() => handleSocialLogin("Facebook")}
      >
        Continue with Facebook
      </Button>
    </Box>
  );
};

export default SocialLogin;