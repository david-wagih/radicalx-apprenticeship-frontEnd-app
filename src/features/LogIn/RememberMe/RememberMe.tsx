import { FC } from 'react';

interface RememberMeProps {
    rememberMe: boolean;
    setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}
const RememberMe: FC<RememberMeProps> = ({ rememberMe, setRememberMe }) => {
    const handleChecked = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="remember-me flex gap-2">
            <button
                onClick={handleChecked}
                id="rememberMeCheckBox"
                className="align-middle"
            >
                {rememberMe && (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.66663 10.7998V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984"
                            stroke="#793EF5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.5 8.65016L13.4333 7.7085"
                            stroke="#793EF5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.56665 10L8.84998 12.2917L10.975 10.175"
                            stroke="#793EF5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
                {!rememberMe && (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.66663 10.7998V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984"
                            stroke="#793EF5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            <label
                htmlFor="rememberMeCheckBox"
                className="
            h-[24px] w-[114px] align-middle text-base font-medium tracking-[0.4px] text-[#828282] "
            >
                Remember me
            </label>
        </div>
    );
};

export default RememberMe;
