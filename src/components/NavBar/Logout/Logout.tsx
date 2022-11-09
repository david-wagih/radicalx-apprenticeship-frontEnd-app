import { FC, useState } from 'react';

import Modal from '../../Modal/Modal';

import LogoutModal from './LogoutModal/LogoutModal';

interface LogoutProps {
    username: string;
    photoURL: string;
}

const Logout: FC<LogoutProps> = ({ username, photoURL }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div>
            <button
                className="relative flex h-[50px] w-[152px] translate-y-[450px] gap-[10px]"
                onClick={handleShowModal}
            >
                <img
                    src={photoURL}
                    alt=""
                    height={50}
                    width={50}
                    className="h-[50px] w-[50px] rounded-[16px] bg-[#E2E6EB]"
                />
                <div className="flex h-[50px] items-center">
                    <p
                        className="w-[92px] text-[16px] leading-[24px]
                        tracking-[0.3px] text-[#1E1E1E]"
                    >
                        {username}
                    </p>
                </div>
            </button>

            {showModal && (
                <Modal
                    children={
                        <LogoutModal
                            onInteract={() => {
                                setShowModal(false);
                            }}
                        />
                    }
                />
            )}
        </div>
    );
};

export default Logout;
