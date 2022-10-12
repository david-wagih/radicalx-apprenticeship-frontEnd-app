import { FC, useEffect, useState } from 'react';

import AddAdminModal from '../AddAdminModal/AddAdminModal';
import AddMemberButton from '../AddMemberButton/AddMemberButton';
import AdminCard from '../AdminCard/AdminCard';

const AddAdmin: FC = () => {
    const [admins, setAdmins] = useState([
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: 'https://www.linkedin.com/in/veronika-fayez-9100ab235/'
        },
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: 'https://www.linkedin.com/in/veronika-fayez-9100ab235/'
        },
        {
            name: 'John Mckinsey',
            email: 'JohnMckinsey@gamil.com',
            linkedIn: ''
        }
    ]);
    const handleSave = (
        newName: string,
        newMail: string,
        newlinkedin: string
    ) => {
        const newAdmin = {
            name: newName,
            email: newMail,
            linkedIn: newlinkedin
        };
        console.log('here ', newAdmin);
        setAdmins(current => [...current, newAdmin]);
        setIsOpen(false);
    };
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
                handleSave={handleSave}
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
