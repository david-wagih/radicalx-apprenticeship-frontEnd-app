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
        <div className="role box-border flex h-12 w-[555px] flex-none flex-grow-0 flex-row  items-start gap-[10px] self-stretch rounded-[12px] border-[1px] border-solid border-[#CECECE] bg-white  py-[12px] pr-[12px] pl-[16px]">
            <RoleIcon />
            <div className="role order-1 flex h-6 w-[456px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0">
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
