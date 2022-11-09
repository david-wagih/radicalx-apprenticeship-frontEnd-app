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
        <div className="fixed flex h-full w-full items-center justify-center">
            <div
                className="flex h-[300px] w-[500px] flex-col rounded-[18px]
            bg-white p-[22px]"
            >
                <button
                    className="flex justify-end text-[20px]"
                    onClick={onInteract}
                >
                    X
                </button>

                <h1 className="text-[55px]">Confirmation</h1>

                <p className="mt-[10px] text-[20px]">
                    Are you sure you want to logout?
                </p>

                <div className="mt-[55px] flex justify-around text-[20px]">
                    <button
                        className="rounded-[10px] bg-[#828282] px-[11px] py-[4px] text-white"
                        onClick={onInteract}
                    >
                        Cancel
                    </button>

                    <Link
                        className="rounded-[10px] bg-rdx-purple px-[11px] py-[4px] text-white"
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
