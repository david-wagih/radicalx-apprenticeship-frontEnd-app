import { FC, useState } from 'react';

import AddAdminModal from '../AddAdminModal/AddAdminModal';
import AddMemberButton from '../AddMemberButton/AddMemberButton';
//interface AddAdminProps{}

const AddAdmin: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <AddMemberButton
                handleClick={() => {
                    setIsOpen(true);
                }}
            ></AddMemberButton>

            <AddAdminModal
                open={isOpen}
                onClose={() => setIsOpen(false)}
            ></AddAdminModal>
        </div>
    );
};

export default AddAdmin;
