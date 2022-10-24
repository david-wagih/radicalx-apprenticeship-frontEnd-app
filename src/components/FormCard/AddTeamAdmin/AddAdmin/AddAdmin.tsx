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
    alreadyExcitingAdmins: teamAdmins;
}

const AddAdmin: FC<AddAdminProps> = ({ dispatch, alreadyExcitingAdmins }) => {
    const [admins, setAdmins] = useState<teamAdmins>([]);
    useEffect(() => {
        dispatch({ type: 'teamAdmins', payload: admins });
    }, [admins.length]);
    
    useEffect(() => {
        setAdmins(alreadyExcitingAdmins);
    }, [alreadyExcitingAdmins]);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <AddMemberButton
                handleClick={() => {
                    setIsOpen(true);
                }}
            />
            <AddAdminModal
                open={isOpen}
                setAdmins={setAdmins}
                admins={admins}
                setIsOpen={setIsOpen}
            />
            <div className="grid grid-cols-2 gap-4">
                {admins.map((admin, index) => (
                    <AdminCard
                        key={index}
                        name={admin.name}
                        linkedIn={admin.linkedIn}
                        logo={admin.logo}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddAdmin;
