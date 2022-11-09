import { removeRememberCookies } from '../../../../features/LogIn/RememberMe/Controller';

export const logout = async (customToken: string) => {
    const res = await fetch(`http://localhost:4000/signout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authentication: `Bearer ${customToken}`
        }
    });
    if (res.status === 200) {
        localStorage.removeItem('userId');
        localStorage.removeItem('customToken');
        localStorage.removeItem('apprenticeships');
        removeRememberCookies();
    }
};
