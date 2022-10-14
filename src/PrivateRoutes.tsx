import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
    const auth = { token: true };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
