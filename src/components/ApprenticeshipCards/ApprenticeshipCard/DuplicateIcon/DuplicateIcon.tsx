import { FC, useContext } from 'react';

import { UserContext } from '../../../../Contexts/UserContext/UserContext';
import { duplicateApprenticeship } from '../../Service';
interface DuplicateIconProps {
    apprenticeshipId: string;
}
const DuplicateIcon: FC<DuplicateIconProps> = ({ apprenticeshipId }) => {
    const customToken = useContext(UserContext).userCredentials.customToken;
    return (
        <button
            onClick={() =>
                duplicateApprenticeship(apprenticeshipId, customToken)
            }
        >
            <div className="duplicate-icon  hover:cursor-pointer">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.5">
                        <path
                            d="M9.24999 18.4584H5.74999C4.18327 18.4584 3.16345 18.1085 2.5275 17.4726C1.89156 16.8366 1.54166 15.8168 1.54166 14.2501V10.7501C1.54166 9.18336 1.89156 8.16354 2.5275 7.52759C3.16345 6.89165 4.18327 6.54175 5.74999 6.54175H9.24999C10.8167 6.54175 11.8365 6.89165 12.4725 7.52759C13.1084 8.16354 13.4583 9.18336 13.4583 10.7501V14.2501C13.4583 15.8168 13.1084 16.8366 12.4725 17.4726C11.8365 18.1085 10.8167 18.4584 9.24999 18.4584ZM5.74999 6.79175C4.42878 6.79175 3.38777 7.00936 2.69852 7.69861C2.00927 8.38786 1.79166 9.42887 1.79166 10.7501V14.2501C1.79166 15.5713 2.00927 16.6123 2.69852 17.3016C3.38777 17.9908 4.42878 18.2084 5.74999 18.2084H9.24999C10.5712 18.2084 11.6122 17.9908 12.3015 17.3016C12.9907 16.6123 13.2083 15.5713 13.2083 14.2501V10.7501C13.2083 9.42887 12.9907 8.38786 12.3015 7.69861C11.6122 7.00936 10.5712 6.79175 9.24999 6.79175H5.74999Z"
                            fill="#292D32"
                            stroke="#1E1E1E"
                        />
                        <path
                            d="M13.4583 12.7084V13.2084H13.9583H14.25C15.5712 13.2084 16.6122 12.9908 17.3015 12.3016C17.9907 11.6123 18.2083 10.5713 18.2083 9.25008V5.75008C18.2083 4.42887 17.9907 3.38786 17.3015 2.69861C16.6122 2.00936 15.5712 1.79175 14.25 1.79175H10.75C9.42878 1.79175 8.38777 2.00936 7.69852 2.69861C7.00927 3.38786 6.79166 4.42887 6.79166 5.75008V6.04175V6.54175H7.29166H9.24999C10.8167 6.54175 11.8365 6.89165 12.4725 7.52759C13.1084 8.16354 13.4583 9.18336 13.4583 10.7501V12.7084ZM14.25 13.4584H13.3333C13.3032 13.4584 13.2719 13.4461 13.2463 13.4205C13.2206 13.3948 13.2083 13.3636 13.2083 13.3334V10.7501C13.2083 9.42887 12.9907 8.38786 12.3015 7.69861C11.6122 7.00936 10.5712 6.79175 9.24999 6.79175H6.66666C6.63651 6.79175 6.60523 6.77946 6.57958 6.75382C6.55394 6.72818 6.54166 6.6969 6.54166 6.66675V5.75008C6.54166 4.18336 6.89156 3.16354 7.5275 2.52759C8.16345 1.89165 9.18327 1.54175 10.75 1.54175H14.25C15.8167 1.54175 16.8365 1.89165 17.4725 2.52759C18.1084 3.16354 18.4583 4.18336 18.4583 5.75008V9.25008C18.4583 10.8168 18.1084 11.8366 17.4725 12.4726C16.8365 13.1085 15.8167 13.4584 14.25 13.4584Z"
                            fill="#292D32"
                            stroke="#1E1E1E"
                        />
                    </g>
                </svg>
            </div>
        </button>
    );
};

export default DuplicateIcon;
