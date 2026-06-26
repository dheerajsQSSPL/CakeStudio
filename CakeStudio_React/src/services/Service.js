import SessionManage from "../Session/SessionManage";

import axios from 'axios';

const CS_API_BASE_URL = window.appConfig.CS_API_BASE_URL;
const CS_BASE_URL = window.appConfig.CS_BASE_URL;

const api = axios.create({
    baseURL: CS_API_BASE_URL,
});

api.interceptors.request.use((config) => {

    if (!config.headers.skipAuth) {

        const token = SessionManage.getTokenId();
        const userId = SessionManage.getUserId();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        if (userId) {
            config.headers.loggedInUser = userId;
        }
    }

    if (config.headers?.skipAuth) {
        delete config.headers.skipAuth;
    }

    return config;
});


api.interceptors.response.use(

    (response) => response,

    async (error) => {

        const originalRequest = error.config;
        if (!originalRequest) {
            return Promise.reject(error);
        }
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes("Auth/login") &&
            !originalRequest.url.includes("Auth/refresh-token")
        ) {

            originalRequest._retry = true;

            try {

                const refreshToken = SessionManage.getRefreshToken();

                const response = await axios.post(
                    CS_API_BASE_URL + "Auth/refresh-token",
                    {
                        refreshToken: refreshToken
                    }
                );

                const newAccessToken = response.data.accessToken;
                const newRefreshToken = response.data.refreshToken;

                SessionManage.setTokenId(newAccessToken);
                SessionManage.setRefreshToken(newRefreshToken);

                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;

                return api(originalRequest);

            }
            catch (err) {

                SessionManage.clearSession();

                window.location.href = "/login";

                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);



class Service {
    login(method, value) {
        return api.post(method, value, {
            headers: {
                skipAuth: true
            }
        });
    }
}

export default new Service();