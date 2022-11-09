import { FC } from 'react';
interface AdminCardProps {
    name: string;
    linkedIn: string;
    logo: File | null;
}

const AdminCard: FC<AdminCardProps> = ({ name, linkedIn, logo }) => {
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
                        {(logo && logo instanceof File && (
                            <image
                                width="40"
                                height="40"
                                href={URL.createObjectURL(logo)}
                            />
                        )) || <image width="40" height="40" />}
                    </svg>
                </div>
                <p className="relative py-6 pl-16 text-left align-middle text-lg font-semibold leading-6">
                    {name.length > 20 ? name.slice(0, 20) + '...' : name}
                </p>
                {linkedIn && (
                    <div className="absolute py-6 pl-[317px]">
                        <a href={linkedIn} target="_blank">
                            <img
                                alt="LinkedInLogo"
                                src="public/assets/Images/LinkedInLogo.svg"
                            />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminCard;
