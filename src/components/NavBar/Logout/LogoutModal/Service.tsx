export const logout = (customToken: string) => {
    fetch(`http://localhost:4000/signout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authentication: `Bearer ${customToken}`
        }
    });
};
