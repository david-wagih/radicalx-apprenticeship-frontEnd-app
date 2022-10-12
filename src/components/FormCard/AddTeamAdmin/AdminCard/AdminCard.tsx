import { FC } from 'react';
interface AdminCardProps {
    name: string;
    linkedIn: string;
}

const AdminCard: FC<AdminCardProps> = ({ name, linkedIn }) => {
    return (
        <div>
            <div className="flex h-[72px] w-[353px] rounded-2xl border-2 border-[#CFD3D9]">
                <div className="absolute px-4 py-4">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="40" height="40" rx="8" fill="#E2E6EB" />
                    </svg>
                </div>
                <p className="relative py-6 pl-16 text-left align-middle text-lg font-semibold leading-6">
                    {name}
                </p>
                {linkedIn && (
                    <div className="absolute py-6 pl-[317px]">
                        <a href={linkedIn} target="_blank">
                            <img
                                alt="LinkedInLogo"
                                src="src\assets\Images\LinkedInLogo.svg"
                            />
                        </a>
                    </div>
                )}

                {/* <div>
                    <link href={linkedIn}>
                        <img
                            alt="LinkedInLogo"
                            src="src\assets\Images\LinkedInLogo.svg"
                        />
                    </link>{' '}
                </div> */}
                {/* <p>{linkedIn}</p> */}
            </div>
        </div>
    );
};

export default AdminCard;
