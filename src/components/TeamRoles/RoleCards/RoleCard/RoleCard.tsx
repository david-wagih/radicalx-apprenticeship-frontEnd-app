import { FC, useContext } from 'react';

import { RolesContext } from '../../../../Contexts/RolesContext/RolesContext';

import DeleteIcon from './DeleteIcon/DeleteIcon';
import DuplicateIcon from './DuplicateIcon/DuplicateIcon';
import EditIcon from './EditIcon/EditIcon';
import Paragraph from './Paragraph/Paragraph';
import Title from './Title/Tittle';

interface RoleCardProps {
    myKey: string;
    title: string;
    paragraph: string;
    tags: string[];
    index: number;
}

const RoleCard: FC<RoleCardProps> = ({
    myKey,
    title,
    paragraph,
    tags,
    index
}) => {
    const { neededRoles } = useContext(RolesContext);
    return (
        <div
            className="order-none box-border flex h-56 w-fit flex-none flex-grow-0 flex-col items-start self-stretch rounded-lg border border-[#CFD3D9] bg-white p-5 "
            key={myKey}
        >
            <div className="flex w-full justify-between">
                <Title text={title} />
                <div className="icons flex space-x-2">
                    <EditIcon currentRole={neededRoles[index]} />
                    <DuplicateIcon index={index} />
                    <DeleteIcon index={index} />
                </div>
            </div>
            <div className="mb-[35px]">
                <Paragraph text={paragraph} />
            </div>
            <div className=" grid h-16 w-[265px] grid-cols-2 items-start gap-y-2 p-0">
                {tags?.map((tag, index) => (
                    <div
                        key={index}
                        className="h-[27px] w-[125px] rounded-lg bg-[#EDEAFF] text-center"
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

export default RoleCard;
