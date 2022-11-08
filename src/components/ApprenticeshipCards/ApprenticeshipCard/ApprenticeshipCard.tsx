import { FC } from 'react';

import DeleteIcon from './DeleteIcon/DeleteIcon';
import DuplicateIcon from './DuplicateIcon/DuplicateIcon';
import EditIcon from './EditIcon/EditIcon';
import Paragraph from './Paragraph/Paragraph';
import Title from './Title/Tittle';
interface ApprenticeshipCardProps {
    myKey: string;
    title: string;
    paragraph: string;
    tags: string[];
    apprenticeshipId: string;
}

const ApprenticeshipCard: FC<ApprenticeshipCardProps> = ({
    myKey,
    title,
    paragraph,
    tags,
    apprenticeshipId
}) => {
    return (
        <div
            className="box-border flex flex-col items-start p-5 h-56 bg-white flex-none order-none self-stretch flex-grow-0 w-fit border-[#CFD3D9] border rounded-lg "
            key={myKey}
        >
            <div className="flex justify-between w-full">
                <Title text={title} />
                <div className="icons flex space-x-2">
                    <EditIcon apprenticeshipId={apprenticeshipId} />
                    <DuplicateIcon apprenticeshipId={apprenticeshipId} />
                    <DeleteIcon apprenticeshipId={apprenticeshipId} />
                </div>
            </div>
            <div className="mb-[35px]">
                <Paragraph text={paragraph} />
            </div>
            <div className=" items-start p-0 h-16 w-[265px] grid grid-cols-2 gap-y-2">
                {tags?.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-[#EDEAFF] w-[125px] h-[27px] rounded-lg text-center"
                    >
                        {tag.length <= 10
                            ? tag.slice(0, 10)
                            : tag.slice(0, 10) + '...'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApprenticeshipCard;
