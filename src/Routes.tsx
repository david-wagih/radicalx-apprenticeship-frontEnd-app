import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './features/LogIn/LogIn';

interface RoutesProps {}
const RoutesComponent: FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
