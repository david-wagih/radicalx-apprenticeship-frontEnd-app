import { Navigate, Outlet } from 'react-router-dom';
export const auth = { isAuthorized: true };
export const PrivateRoutes = () => {
    return auth.isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};
