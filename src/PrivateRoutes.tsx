import { Navigate, Outlet } from 'react-router-dom';
export const auth = {
    isAuthorized: localStorage.getItem('customToken') ? true : false
};
export const PrivateRoutes = () => {
    return auth.isAuthorized ? <Outlet /> : <Navigate to="/signup" />;
};
