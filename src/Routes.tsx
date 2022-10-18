import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TeamCard from './components/FormCard/TeamTypes/TeamCard/TeamCard';
import { OptionsContextProvider } from './Contexts/OptionsContext/OptionsContext';
import { RolesContextProvider } from './Contexts/RolesContext/RolesContext';
import CreatingApprenticeship from './features/CreatingApprenticeship/CreatingApprenticeship';
import ForgotPassword from './features/ForgotPassword/ForgotPassword';
import HomePage from './features/HomePage/HomePage';
import LogIn from './features/LogIn/LogIn';
import SignUp from './features/SignUp/SignUp';
import { PrivateRoutes } from './PrivateRoutes';

const RoutesComponent: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route element={<PrivateRoutes />}>
                    <Route
                        path="/creating_apprenticeship"
                        element={
                            <OptionsContextProvider>
                                <RolesContextProvider>
                                    <CreatingApprenticeship />
                                </RolesContextProvider>
                            </OptionsContextProvider>
                        }
                    />
                    <Route path="/homepage" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
