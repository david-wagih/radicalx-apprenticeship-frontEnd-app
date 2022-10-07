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
    myKey: string;
}

const Card: FC<CardProps> = ({ title, paragraph, tags, myKey }) => {
    return (
        <div
            className="box-border flex flex-col items-start p-5 h-56 bg-white flex-none order-none self-stretch flex-grow-0 w-[365px] border-[#CFD3D9] border rounded-lg "
            key={myKey}
        >
            <div className="inline-flex">
                <Title text={title} />
                <EditIcon />
                <DuplicateIcon />
                <DeleteIcon />
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

export default Card;
