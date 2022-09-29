import { FC, useState } from 'react';

import ProgressBar from '../../components/ProgressBar/ProgressBar';

interface CreatingApprenticeshipProps {}

const CreatingApprenticeship: FC<CreatingApprenticeshipProps> = () => {
    const [checked, setChecked] = useState([true, true, false, false, false]);
    return (
        <>
            <ProgressBar checked={checked} />
        </>
    );
};

export default CreatingApprenticeship;
