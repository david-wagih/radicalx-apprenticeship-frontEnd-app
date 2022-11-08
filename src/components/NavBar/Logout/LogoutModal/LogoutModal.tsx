import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../../Contexts/UserContext/UserContext';

import { logout } from './Service';

interface ModalProps {
    onInteract: () => void;
}

const Modal: FC<ModalProps> = ({ onInteract }) => {
    const { customToken } = useContext(UserContext).userCredentials;
    return (
        <div className="flex fixed items-center justify-center w-full h-full">
            <div
                className="flex flex-col rounded-[18px] bg-white p-[22px]
            w-[500px] h-[300px]"
            >
                <button
                    className="flex justify-end text-[20px]"
                    onClick={onInteract}
                >
                    X
                </button>

                <h1 className="text-[55px]">Confirmation</h1>

                <p className="text-[20px] mt-[10px]">
                    Are you sure you want to logout?
                </p>

                <div className="flex justify-around mt-[55px] text-[20px]">
                    <button
                        className="bg-[#828282] rounded-[10px] px-[11px] py-[4px] text-white"
                        onClick={onInteract}
                    >
                        Cancel
                    </button>

                    <Link
                        className="bg-rdx-purple rounded-[10px] px-[11px] py-[4px] text-white"
                        to="/login"
                        onClick={() => logout(customToken)}
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Modal;
