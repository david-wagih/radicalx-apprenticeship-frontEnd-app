import { FC, useEffect, useState } from 'react';

import {
    action,
    teamAdmins
} from '../../../../features/CreatingApprenticeship/Controller';
import AddAdminModal from '../AddAdminModal/AddAdminModal';
import AddMemberButton from '../AddMemberButton/AddMemberButton';
import AdminCard from '../AdminCard/AdminCard';

interface AddAdminProps {
    dispatch: (action: action) => void;
}

const AddAdmin: FC<AddAdminProps> = ({ dispatch }) => {
    const [admins, setAdmins] = useState<teamAdmins>([]);
    useEffect(() => {
        dispatch({ type: 'teamAdmins', payload: admins });
    }, [admins.length]);
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
