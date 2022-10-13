import { FC, useContext, useEffect, useState } from 'react';

import ArrowDownIcon from '../../../../components/TeamRoles/AddRoleForm/ArrowDownIcon/ArrowDownIcon';
import DropDown from '../../../../components/TeamRoles/AddRoleForm/DropDown/DropDown';
import RoleIcon from '../../../../components/TeamRoles/AddRoleForm/RoleIcon/RoleIcon';
import { OptionsContext } from '../../../../Contexts/OptionsContext/OptionsContext';
import { teamRole } from '../../Controller';

interface SelectRoleProps {
    setCurrentRole: (role: teamRole) => void;
    currentRole: teamRole;
    initialRole?: string;
}
const SelectRole: FC<SelectRoleProps> = ({
    setCurrentRole,
    currentRole,
    initialRole
}) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [role, setRole] = useState(initialRole || 'select role');
    useEffect(() => {
        setCurrentRole({ ...currentRole, roleName: role });
    }, [role]);
    const roles = useContext(OptionsContext).options.roles;
    return (
        <div className="role box-border flex flex-row items-start h-12 bg-white flex-none  self-stretch flex-grow-0 py-[12px] pr-[12px] pl-[16px] gap-[10px] w-[555px] border-[1px]  border-[#CECECE] border-solid rounded-[12px]">
            <RoleIcon />
            <div className="role flex flex-col justify-between items-start p-0 h-6 flex-none order-1 self-stretch flex-grow gap-[11px] w-[456px]">
                {role}
            </div>
            {showDropDown && (
                <DropDown
                    options={roles}
                    setShowDropDown={setShowDropDown}
                    setOption={setRole}
                />
            )}
            <ArrowDownIcon setShowDropDown={setShowDropDown} />
        </div>
    );
};

export default SelectRole;
