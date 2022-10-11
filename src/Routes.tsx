import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoard from './components/NavBar/Dashboard/Dashboard';
import {
    options,
    OptionsContext
} from './Contexts/OptionsContext/OptionsContext';
import { RolesContextProvider } from './Contexts/RolesContext/RolesContext';
import CreatingApprenticeship from './features/CreatingApprenticeship/CreatingApprenticeship';
import HomePage from './features/HomePage/HomePage';
import LogIn from './features/LogIn/LogIn';
import SignUp from './features/SignUp/SignUp';

const RoutesComponent: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route
                    path="/creating_apprenticeship"
                    element={
                        <OptionsContext.Provider value={options}>
                            <RolesContextProvider>
                                <CreatingApprenticeship />
                            </RolesContextProvider>
                        </OptionsContext.Provider>
                    }
                />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
