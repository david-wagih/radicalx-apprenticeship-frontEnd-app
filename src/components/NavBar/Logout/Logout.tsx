import { FC, useState } from "react";

import Modal from "../../Modal/Modal";

import LogoutModal from "./LogoutModal/LogoutModal";



interface LogoutProps {
    username: string
    photoURL: string
}
 
const Logout: FC<LogoutProps> = ({username, photoURL}) => {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            <button
                className="flex gap-[10px] w-[152px] h-[50px] relative translate-y-[450px]"
                onClick={handleShowModal}>
                <img
                    src={photoURL}
                    alt=""
                    height={50}
                    width={50}
                    className="w-[50px] h-[50px] rounded-[16px] bg-[#E2E6EB]"/>
                <div className="h-[50px] flex items-center">
                    <p
                        className="w-[92px] text-[16px] leading-[24px]
                        text-[#1E1E1E] tracking-[0.3px]">
                        {username}
                    </p>
                </div>
                
            </button>

            {showModal &&
            (<Modal
                children={<LogoutModal onInteract={() => {setShowModal(false)}}/>}
            />)
            }
        </div>
        
    );
}
 
export default Logout;