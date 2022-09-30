import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatingApprenticeship from './features/CreatingApprenticeship/CreatingApprenticeship';
import LogIn from './features/LogIn/LogIn';
import { getStoredVar } from './features/LogIn/RememberMe/Controller';
import SignUp from './features/SignUp/SignUp';

const RoutesComponent: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={getStoredVar()? <CreatingApprenticeship/>:<LogIn/>} />
                <Route
                    path="/creating_apprenticeship"
                    element={<CreatingApprenticeship />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
