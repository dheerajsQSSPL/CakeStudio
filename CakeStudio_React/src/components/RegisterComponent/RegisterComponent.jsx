import AuthBanner from "../common/Auth/AuthBanner/AuthBanner";
import { AUTH_BANNER } from "../../constants/authBanner"
import { Box, Grid } from "@mui/material";
import AuthHeader from "../common/Auth/AuthHeader/AuthHeader"
import { AUTH_HEADER } from "../../constants/authConstants";
import '../LoginComponent/LoginPage.css'
import AuthDivider from "../common/Auth/AuthDivider/AuthDivider"
import SocialLogin from "../common/Auth/SocialLogin/SocialLogin"
import LoginForm from "../common/Auth/LoginForm/LoginForm";
import RegisterForm from "../common/Auth/RegisterForm/RegisterForm"
export default function RegisterComponent(props) {
    return (
        <>
            <Grid container sx={{ minHeight: "100vh" }}>
                {/* Left Side */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <AuthBanner banner={AUTH_BANNER.register} />
                </Grid>

                {/* Right Side */}
                <Grid size={{ xs: 12, md: 7 }}>
                    {/* Login Form */}
                    <Box className="auth-form-container">
                        <Box className="auth-form-content">
                            <AuthHeader
                                title={AUTH_HEADER.register.title}
                                subtitle={AUTH_HEADER.register.subtitle}
                            />

                            <AuthDivider text="Continue with" />

                            <SocialLogin />

                            <AuthDivider text="OR" />

                            <RegisterForm />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}