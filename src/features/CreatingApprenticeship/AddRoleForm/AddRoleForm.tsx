import { FC, useContext, useState } from 'react';

import ExitIcon from '../../../components/TeamRoles/AddRoleForm/ExitIcon/ExitIcon';
import { RolesContext } from '../../../Contexts/RolesContext/RolesContext';
import { teamRole } from '../Controller';

import ComplimentarySkills from './ComplimentarySkills/ComplimentarySkills';
import Location from './Location/Location';
import MinHours from './MinHours/MinHours';
import RequiredSkills from './RequiredSkills/RequiredSkills';
import RoleDescription from './RoleDescription/RoleDescription';
import SelectRole from './SelectRole/SelectRole';

const AddRoleForm: FC = () => {
    const { initialValues, setShowModal, neededRoles, setNeededRoles } =
        useContext(RolesContext);
    const [currentRole, setCurrentRole] = useState<teamRole>(initialValues);

    return (
        <div className="form absolute left-[456px] top-[40px] z-50 box-border flex h-fit w-[600px] flex-col items-start gap-[20px] rounded-[24px] border-[1px] border-solid border-[#793EF5] bg-white p-6">
            <div className="title-save order-none flex  h-8 w-[522px] flex-none flex-grow-0 flex-row items-center gap-[350px] self-stretch p-0 ">
                <p className="title w-30 order-none flex h-6 flex-none flex-grow-0 flex-row items-center gap-[16px] p-0 text-xl font-semibold">
                    Add Role
                </p>
                <div className="save-cancel order-1 flex h-8 w-32 flex-none flex-grow-0 flex-row items-center gap-[12px] p-0 ">
                    <button
                        className="order-none flex h-8 w-20 flex-none flex-grow-0 flex-row items-center justify-end gap-[29px] rounded-lg bg-purple-600 py-[8px] px-[24px] text-white"
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
                    <ExitIcon />
                </div>
            </div>
            <SelectRole
                initialRole={initialValues.roleName}
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
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
            <ComplimentarySkills
                initialCompSkills={initialValues.complimentarySkills}
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
                setCurrentRole={setCurrentRole}
                currentRole={currentRole}
            />
        </div>
    );
};

export default AddRoleForm;
