import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import route from "../../../routes/Route";

function Content() {


    return (
        <>
            <Box>
                <Routes>
                    {
                        route.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        element={<route.component />}
                                    />
                                )
                            )
                        })
                    }
                </Routes>
            </Box>
        </>
    )
}

export default Content;