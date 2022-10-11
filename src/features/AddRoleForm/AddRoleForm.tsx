import { FC, useState } from 'react';

import ExitIcon from '../../components/TeamRoles/AddRoleForm/ExitIcon/ExitIcon';
import { teamRoles } from '../../features/CreatingApprenticeship/Controller';
import { teamRole } from '../../features/CreatingApprenticeship/Controller';

import ComplimentarySkills from './ComplimentarySkills/ComplimentarySkills';
import Location from './Location/Location';
import MinHours from './MinHours/MinHours';
import RequiredSkills from './RequiredSkills/RequiredSkills';
import RoleDescription from './RoleDescription/RoleDescription';
import SelectRole from './SelectRole/SelectRole';
interface AddRoleFormProps {
    //values of dropdowns
    roles: string[];
    requiredSkillsOptions: string[];
    compSkillsOptions: string[];
    locations: string[];
    //------------------
    setShowModal: (showModal: boolean) => void;
    //------------------
    setNeededRoles: (neededRoles: teamRoles) => void;
    neededRoles: teamRoles;
    //------------------
    initialValues: teamRole;
}

const AddRoleForm: FC<AddRoleFormProps> = ({
    roles,
    requiredSkillsOptions,
    compSkillsOptions,
    locations,
    setShowModal,
    setNeededRoles,
    neededRoles,
    initialValues
}) => {
    const [currentRole, setCurrentRole] = useState<teamRole>(initialValues);

    return (
        <div className="form gap-[20px] z-50 w-[600px] bg-white h-fit left-[456px] top-[40px] box-border flex flex-col items-start p-6 absolute border-[1px] border-[#793EF5] border-solid rounded-[24px]">
            <div className="title-save flex flex-row  items-center p-0 h-8 flex-none order-none self-stretch flex-grow-0 gap-[350px] w-[522px] ">
                <p className="title flex flex-row items-center p-0 w-30 h-6 flex-none order-none flex-grow-0 gap-[16px] text-xl font-semibold">
                    Add Role
                </p>
                <div className="save-cancel flex flex-row items-center p-0 w-32 h-8 flex-none order-1 flex-grow-0 gap-[12px] ">
                    <button
                        className="flex flex-row justify-end items-center w-20 h-8 bg-purple-600 rounded-lg flex-none order-none flex-grow-0 py-[8px] px-[24px] gap-[29px] text-white"
                        onClick={() => {
                            if (initialValues.roleName === '') {
                                setNeededRoles([...neededRoles, currentRole]);
                            } else {
                                setNeededRoles([
                                    ...neededRoles.slice(
                                        0,
                                        neededRoles.length - 1
                                    ),
                                    currentRole
                                ]);
                            }
                            setShowModal(false);
                        }}
                    >
                        Save
                    </button>
                    <ExitIcon setShowModal={setShowModal} />
                </div>
            </div>
            <SelectRole
                initialRole={initialValues.roleName}
                roles={roles}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <RoleDescription
                initialDescription={initialValues.roleDescription}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <RequiredSkills
                initialRequiredSkills={initialValues.requiredSkills}
                skills={requiredSkillsOptions}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <ComplimentarySkills
                initialCompSkills={initialValues.complimentarySkills}
                compSkillsOptions={compSkillsOptions}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <MinHours
                initialValue={initialValues.minHours}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <Location
                initialLocations={initialValues.locationPreferences}
                locations={locations}
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
        </div>
    );
};

export default AddRoleForm;
