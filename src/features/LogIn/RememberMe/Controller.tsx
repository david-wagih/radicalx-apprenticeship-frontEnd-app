let rememberMe: boolean;

export const setRememberCookies = (token: string) => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    if (rememberMe) {
        document.cookie = `token=${token}; expires=${date.toUTCString()}; path=/`;
    }
};

export const removeRememberCookies = () => {
    document.cookie = `token=; expires=Sat, 20 Dec 1990 12:00:00 UTC; path=/`;
};
