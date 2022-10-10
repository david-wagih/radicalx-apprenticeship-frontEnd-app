import { FC } from 'react';

import ExitIcon from '../../components/AddRoleForm/ExitIcon/ExitIcon';

import ComplimentarySkills from './ComplimentarySkills/ComplimentarySkills';
import Location from './Location/Location';
import MinHours from './MinHours/MinHours';
import RequiredSkills from './RequiredSkills/RequiredSkills';
import RoleDescription from './RoleDescription/RoleDescription';
import SelectRole from './SelectRole/SelectRole';
interface AddRoleFormProps {
    setShowModal: (showModal: boolean) => void;
    roles: string[];
    reqSkills: string[];
    compSkills: string[];
    Description: string;
    minHours: number;
    location: string[];
}

const AddRoleForm: FC<AddRoleFormProps> = ({
    setShowModal,
    roles,
    Description,
    reqSkills,
    compSkills,
    minHours,
    location
}) => {
    return (
        <div className="form gap-[20px] z-50 w-[600px] bg-white h-fit left-[456px] top-[40px] box-border flex flex-col items-start p-6 absolute border-[1px] border-[#793EF5] border-solid rounded-[24px]">
            <div className="title-save flex flex-row  items-center p-0 h-8 flex-none order-none self-stretch flex-grow-0 gap-[350px] w-[522px] ">
                <p className="title flex flex-row items-center p-0 w-30 h-6 flex-none order-none flex-grow-0 gap-[16px] text-xl font-semibold">
                    Add Role
                </p>
                <div className="save-cancel flex flex-row items-center p-0 w-32 h-8 flex-none order-1 flex-grow-0 gap-[12px] ">
                    <button className="flex flex-row justify-end items-center w-20 h-8 bg-purple-600 rounded-lg flex-none order-none flex-grow-0 py-[8px] px-[24px] gap-[29px] text-white">
                        Save
                    </button>
                    <ExitIcon setShowModal={setShowModal} />
                </div>
            </div>
            <SelectRole roles={roles} />
            <RoleDescription initialDescription={Description} />
            <RequiredSkills reqSkills={reqSkills} />
            <ComplimentarySkills compSkills={compSkills} />
            <MinHours initialValue={minHours} />
            <Location locations={location} />
        </div>
    );
};

export default AddRoleForm;
