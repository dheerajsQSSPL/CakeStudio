import AuthBanner from "../common/Auth/AuthBanner/AuthBanner";
import { AUTH_BANNER } from "../../constants/authBanner"
import { Box, Grid } from "@mui/material";
import AuthHeader from "../common/Auth/AuthHeader/AuthHeader"
import { AUTH_HEADER } from "../../constants/authConstants";
import './LoginPage.css'
import AuthDivider from "../common/Auth/AuthDivider/AuthDivider"
import SocialLogin from "../common/Auth/SocialLogin/SocialLogin"
import LoginForm from "../common/Auth/LoginForm/LoginForm";

export default function LoginComponent(props) {
    return (
        <>
            <Grid container sx={{ minHeight: "100vh" }}>
                {/* Left Side */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <AuthBanner banner={AUTH_BANNER.login} />
                </Grid>

                {/* Right Side */}
                <Grid size={{ xs: 12, md: 7 }}>
                    {/* Login Form */}
                    <Box className="auth-form-container">
                        <Box className="auth-form-content">
                            <AuthHeader
                                title={AUTH_HEADER.login.title}
                                subtitle={AUTH_HEADER.login.subtitle}
                            />
                            <AuthDivider text={'Continue with'} />
                            <SocialLogin />
                            <AuthDivider text={'Or'} />
                            <LoginForm/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}