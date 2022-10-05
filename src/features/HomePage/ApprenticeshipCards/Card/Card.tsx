import { FC } from 'react';

import DeleteIcon from './DeleteIcon/DeleteIcon';
import DuplicateIcon from './DuplicateIcon/DuplicateIcon';
import EditIcon from './EditIcon/EditIcon';
import Paragraph from './Paragraph/Paragraph';
import Title from './Title/Tittle';
interface CardProps {
    title: string;
    paragraph: string;
    tags: string[];
}

const Card: FC<CardProps> = ({ title, paragraph, tags }) => {
    console.log(tags);
    return (
        <div className="box-border flex flex-col items-start p-5 h-56 bg-white flex-none order-none self-stretch flex-grow-0 w-[365px] border-[#CFD3D9] border rounded-lg ">
            <div className="inline-flex">
                <Title text={title} /> <EditIcon /> <DeleteIcon />{' '}
                <DuplicateIcon />
            </div>
            <div className="mb-[35px]">
                <Paragraph text={paragraph} />
            </div>
            <div className=" items-start p-0 h-16 w-[283px] gap-[8xp] grid grid-cols-2 ">
                {tags?.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-[#EDEAFF] w-[100px] rounded-lg"
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
