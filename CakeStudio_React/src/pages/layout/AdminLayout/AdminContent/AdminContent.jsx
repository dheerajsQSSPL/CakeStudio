import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import adminRoutes from "../../../../routes/adminRoutes";

export default function AdminContent() {
    return (
        <Box>
            <Routes>
                {
                    adminRoutes.map((route, index) => {

                        return (

                            route.component && (

                                <Route

                                    key={index}

                                    path={route.path}

                                    element={<route.component />}

                                />

                            )

                        );

                    })
                }
            </Routes>
        </Box>
    )
}