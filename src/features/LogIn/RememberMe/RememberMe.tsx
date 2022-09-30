import { FC } from "react";

import { handleIsChecked } from "./Controller";
 
const RememberMe: FC = () => {
    return (
        <>
            {/*Checkbox is yet to be modified*/}
            <input type="checkbox" id="rememberMeCheckBox" onChange={handleIsChecked} className="
                accent-rdx-purple align-middle mx-1
            "/>
            <label htmlFor="rememberMeCheckBox" className="
                w-114 h-24 inline font-[500] text-base text-center text-[#828282] align-middle
            ">
                Remember me
            </label>
        </>
    );
}
 
export default RememberMe;