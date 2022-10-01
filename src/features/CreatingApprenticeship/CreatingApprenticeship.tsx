import { FC, useState } from 'react';

import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

interface CreatingApprenticeshipProps {}

const CreatingApprenticeship: FC<CreatingApprenticeshipProps> = () => {
    const keys = [
        'logo-title',
        'company-description',
        'Apprenticeship Description'
    ];
    const headers = [
        'Logo & Title',
        'Company Description',
        'Apprenticeship Description'
    ];
    const children = [<LogoAndTitle />, <CardText />, <CardText />];
    const [checked, setChecked] = useState([true, true, false, false, false]);
    return (
        <div
            className="parent min-h-screen  bg-background-gray
        relative w-[1512px] h-[1963px]
        "
        >
            <Header />
            <ProgressBar checked={checked} />
            <div
                className="cards
           flex flex-col items-start p-0 absolute gap-[20px] isolate w-[770px] h-[1697px] top-[218px] left-[371px]
           "
            >
                {headers.map((header, index) => (
                    <FormCard
                        header={header}
                        key={keys[index]}
                        children={children[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default CreatingApprenticeship;
