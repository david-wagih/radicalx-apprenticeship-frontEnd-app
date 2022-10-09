import { FC, useEffect, useState } from 'react';

import AddAdminModal from '../AddAdminModal/AddAdminModal';
import AddMemberButton from '../AddMemberButton/AddMemberButton';
import AdminCard from '../AdminCard/AdminCard';
interface AddAdminProps {
    newAdmin: object;
}

const AddAdmin: FC<AddAdminProps> = newAdmin => {
    const [admins, setAdmins] = useState([
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: 'https://www.linkedin.com/in/veronika-fayez-9100ab235/',
            id: '1'
        },
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: 'https://www.linkedin.com/in/veronika-fayez-9100ab235/',
            id: '2'
        },
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: '',
            id: '3'
        }
    ]);
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
            <div className="grid grid-cols-2 gap-4">
                {admins.map(admin => (
                    <AdminCard
                        name={admin.name}
                        linkedIn={admin.linkedIn}
                    ></AdminCard>
                ))}
            </div>
        </div>
    );
};

export default AddAdmin;
