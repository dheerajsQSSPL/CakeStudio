class SessionManage {
    async setUserId(value) {
        sessionStorage.setItem('id', value)
    }
    getUserId() {
        const userId = sessionStorage.getItem('id');
        return userId;
    }

    async setTokenId(value) {
        sessionStorage.setItem('token', value);
    }
    getTokenId() {
        sessionStorage.getItem('token')
    }

    async setRefreshToken(value) {
        sessionStorage.setItem('atoken', value);
    }
    getRefreshToken() {
        sessionStorage.getItem('atoken')
    }

    clearSession() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("atoken");
        sessionStorage.removeItem("id");
    }
}

export default new SessionManage();