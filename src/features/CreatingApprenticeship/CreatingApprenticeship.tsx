import { FC, useState } from 'react';

import Header from './Header/Header';
import ProgressBar from './ProgressBar/ProgressBar';

interface CreatingApprenticeshipProps {}

const CreatingApprenticeship: FC<CreatingApprenticeshipProps> = () => {
    const [checked, setChecked] = useState([true, true, false, false, false]);
    return (
        <div className="parent min-h-screen bg-background-gray ">
            <ProgressBar checked={checked} />
            <Header />
        </div>
    );
};

export default CreatingApprenticeship;
