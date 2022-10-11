import { FC, useContext } from 'react';

import { RolesContext } from '../../../Contexts/RolesContext/RolesContext';

const AddRoleButton: FC = () => {
    const { setInitialValues, setShowModal } = useContext(RolesContext);
    return (
        <button
            className="add-button translate-x-[110px] translate-y-[-43px]"
            onClick={() => {
                setInitialValues({
                    roleName: '',
                    roleDescription: '',
                    requiredSkills: [],
                    complimentarySkills: [],
                    minHours: '',
                    locationPreferences: []
                });
                setShowModal(true);
            }}
        >
            <svg
                width="153"
                height="30"
                viewBox="0 0 153 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="1" y="1" width="151" height="28" rx="8" fill="white" />
                <path
                    d="M18.9997 22.1668C15.0463 22.1668 11.833 18.9535 11.833 15.0002C11.833 11.0468 15.0463 7.8335 18.9997 7.8335C22.953 7.8335 26.1663 11.0468 26.1663 15.0002C26.1663 18.9535 22.953 22.1668 18.9997 22.1668ZM18.9997 8.8335C15.5997 8.8335 12.833 11.6002 12.833 15.0002C12.833 18.4002 15.5997 21.1668 18.9997 21.1668C22.3997 21.1668 25.1663 18.4002 25.1663 15.0002C25.1663 11.6002 22.3997 8.8335 18.9997 8.8335Z"
                    fill="#793EF5"
                />
                <path
                    d="M21.6663 15.5H16.333C16.0597 15.5 15.833 15.2733 15.833 15C15.833 14.7267 16.0597 14.5 16.333 14.5H21.6663C21.9397 14.5 22.1663 14.7267 22.1663 15C22.1663 15.2733 21.9397 15.5 21.6663 15.5Z"
                    fill="#793EF5"
                />
                <path
                    d="M19 18.1668C18.7267 18.1668 18.5 17.9402 18.5 17.6668V12.3335C18.5 12.0602 18.7267 11.8335 19 11.8335C19.2733 11.8335 19.5 12.0602 19.5 12.3335V17.6668C19.5 17.9402 19.2733 18.1668 19 18.1668Z"
                    fill="#793EF5"
                />
                <path
                    d="M31.252 19L33.652 10.6H35.932L38.32 19H36.988L36.436 17.02H33.148L32.596 19H31.252ZM33.472 15.82H36.112L34.888 11.404H34.696L33.472 15.82ZM42.242 19.168C41.754 19.168 41.302 19.048 40.886 18.808C40.47 18.568 40.134 18.224 39.878 17.776C39.63 17.32 39.506 16.772 39.506 16.132V15.952C39.506 15.32 39.63 14.776 39.878 14.32C40.126 13.864 40.458 13.516 40.874 13.276C41.29 13.036 41.746 12.916 42.242 12.916C42.626 12.916 42.946 12.964 43.202 13.06C43.466 13.156 43.682 13.28 43.85 13.432C44.018 13.576 44.146 13.728 44.234 13.888H44.426V10.6H45.662V19H44.45V18.16H44.258C44.106 18.416 43.874 18.648 43.562 18.856C43.258 19.064 42.818 19.168 42.242 19.168ZM42.59 18.088C43.126 18.088 43.566 17.916 43.91 17.572C44.262 17.228 44.438 16.736 44.438 16.096V15.988C44.438 15.356 44.266 14.868 43.922 14.524C43.578 14.18 43.134 14.008 42.59 14.008C42.062 14.008 41.622 14.18 41.27 14.524C40.926 14.868 40.754 15.356 40.754 15.988V16.096C40.754 16.736 40.926 17.228 41.27 17.572C41.622 17.916 42.062 18.088 42.59 18.088ZM50.2295 19.168C49.7415 19.168 49.2895 19.048 48.8735 18.808C48.4575 18.568 48.1215 18.224 47.8655 17.776C47.6175 17.32 47.4935 16.772 47.4935 16.132V15.952C47.4935 15.32 47.6175 14.776 47.8655 14.32C48.1135 13.864 48.4455 13.516 48.8615 13.276C49.2775 13.036 49.7335 12.916 50.2295 12.916C50.6135 12.916 50.9335 12.964 51.1895 13.06C51.4535 13.156 51.6695 13.28 51.8375 13.432C52.0055 13.576 52.1335 13.728 52.2215 13.888H52.4135V10.6H53.6495V19H52.4375V18.16H52.2455C52.0935 18.416 51.8615 18.648 51.5495 18.856C51.2455 19.064 50.8055 19.168 50.2295 19.168ZM50.5775 18.088C51.1135 18.088 51.5535 17.916 51.8975 17.572C52.2495 17.228 52.4255 16.736 52.4255 16.096V15.988C52.4255 15.356 52.2535 14.868 51.9095 14.524C51.5655 14.18 51.1215 14.008 50.5775 14.008C50.0495 14.008 49.6095 14.18 49.2575 14.524C48.9135 14.868 48.7415 15.356 48.7415 15.988V16.096C48.7415 16.736 48.9135 17.228 49.2575 17.572C49.6095 17.916 50.0495 18.088 50.5775 18.088ZM60.7558 19V11.776H58.1758V10.6H64.6318V11.776H62.0518V19H60.7558ZM67.6943 19.168C67.0943 19.168 66.5703 19.044 66.1223 18.796C65.6743 18.54 65.3223 18.184 65.0663 17.728C64.8183 17.264 64.6943 16.728 64.6943 16.12V15.976C64.6943 15.36 64.8183 14.824 65.0663 14.368C65.3143 13.904 65.6583 13.548 66.0983 13.3C66.5463 13.044 67.0623 12.916 67.6463 12.916C68.2143 12.916 68.7103 13.044 69.1343 13.3C69.5663 13.548 69.9023 13.896 70.1423 14.344C70.3823 14.792 70.5023 15.316 70.5023 15.916V16.384H65.9543C65.9703 16.904 66.1423 17.32 66.4703 17.632C66.8063 17.936 67.2223 18.088 67.7183 18.088C68.1823 18.088 68.5303 17.984 68.7623 17.776C69.0023 17.568 69.1863 17.328 69.3143 17.056L70.3343 17.584C70.2223 17.808 70.0583 18.044 69.8423 18.292C69.6343 18.54 69.3583 18.748 69.0143 18.916C68.6703 19.084 68.2303 19.168 67.6943 19.168ZM65.9663 15.436H69.2423C69.2103 14.988 69.0503 14.64 68.7623 14.392C68.4743 14.136 68.0983 14.008 67.6343 14.008C67.1703 14.008 66.7903 14.136 66.4943 14.392C66.2063 14.64 66.0303 14.988 65.9663 15.436ZM74.1261 19.168C73.7021 19.168 73.3221 19.096 72.9861 18.952C72.6581 18.808 72.3941 18.596 72.1941 18.316C72.0021 18.036 71.9061 17.696 71.9061 17.296C71.9061 16.888 72.0021 16.552 72.1941 16.288C72.3941 16.016 72.6621 15.812 72.9981 15.676C73.3421 15.54 73.7301 15.472 74.1621 15.472H75.9621V15.088C75.9621 14.744 75.8581 14.468 75.6501 14.26C75.4421 14.052 75.1221 13.948 74.6901 13.948C74.2661 13.948 73.9421 14.048 73.7181 14.248C73.4941 14.448 73.3461 14.708 73.2741 15.028L72.1221 14.656C72.2181 14.336 72.3701 14.048 72.5781 13.792C72.7941 13.528 73.0781 13.316 73.4301 13.156C73.7821 12.996 74.2061 12.916 74.7021 12.916C75.4701 12.916 76.0741 13.112 76.5141 13.504C76.9541 13.896 77.1741 14.452 77.1741 15.172V17.608C77.1741 17.848 77.2861 17.968 77.5101 17.968H78.0141V19H77.0901C76.8101 19 76.5821 18.928 76.4061 18.784C76.2301 18.64 76.1421 18.444 76.1421 18.196V18.16H75.9621C75.8981 18.28 75.8021 18.42 75.6741 18.58C75.5461 18.74 75.3581 18.88 75.1101 19C74.8621 19.112 74.5341 19.168 74.1261 19.168ZM74.3061 18.148C74.8021 18.148 75.2021 18.008 75.5061 17.728C75.8101 17.44 75.9621 17.048 75.9621 16.552V16.432H74.2341C73.9061 16.432 73.6421 16.504 73.4421 16.648C73.2421 16.784 73.1421 16.988 73.1421 17.26C73.1421 17.532 73.2461 17.748 73.4541 17.908C73.6621 18.068 73.9461 18.148 74.3061 18.148ZM79.5159 19V13.084H80.7279V13.78H80.9199C81.0319 13.572 81.2119 13.388 81.4599 13.228C81.7079 13.068 82.0439 12.988 82.4679 12.988C82.9079 12.988 83.2599 13.08 83.5239 13.264C83.7959 13.44 83.9999 13.668 84.1359 13.948H84.3279C84.4639 13.676 84.6599 13.448 84.9159 13.264C85.1799 13.08 85.5519 12.988 86.0319 12.988C86.4159 12.988 86.7559 13.068 87.0519 13.228C87.3479 13.38 87.5839 13.612 87.7599 13.924C87.9359 14.228 88.0239 14.608 88.0239 15.064V19H86.7879V15.16C86.7879 14.8 86.6879 14.524 86.4879 14.332C86.2959 14.132 86.0199 14.032 85.6599 14.032C85.2759 14.032 84.9679 14.156 84.7359 14.404C84.5039 14.652 84.3879 15.008 84.3879 15.472V19H83.1519V15.16C83.1519 14.8 83.0519 14.524 82.8519 14.332C82.6599 14.132 82.3839 14.032 82.0239 14.032C81.6399 14.032 81.3319 14.156 81.0999 14.404C80.8679 14.652 80.7519 15.008 80.7519 15.472V19H79.5159ZM93.4276 19V10.6H95.8636L97.6996 18.136H97.8916L99.7276 10.6H102.164V19H100.904V11.512H100.712L98.8876 19H96.7036L94.8796 11.512H94.6876V19H93.4276ZM106.964 19.168C106.364 19.168 105.84 19.044 105.392 18.796C104.944 18.54 104.592 18.184 104.336 17.728C104.088 17.264 103.964 16.728 103.964 16.12V15.976C103.964 15.36 104.088 14.824 104.336 14.368C104.584 13.904 104.928 13.548 105.368 13.3C105.816 13.044 106.332 12.916 106.916 12.916C107.484 12.916 107.98 13.044 108.404 13.3C108.836 13.548 109.172 13.896 109.412 14.344C109.652 14.792 109.772 15.316 109.772 15.916V16.384H105.224C105.24 16.904 105.412 17.32 105.74 17.632C106.076 17.936 106.492 18.088 106.988 18.088C107.452 18.088 107.8 17.984 108.032 17.776C108.272 17.568 108.456 17.328 108.584 17.056L109.604 17.584C109.492 17.808 109.328 18.044 109.112 18.292C108.904 18.54 108.628 18.748 108.284 18.916C107.94 19.084 107.5 19.168 106.964 19.168ZM105.236 15.436H108.512C108.48 14.988 108.32 14.64 108.032 14.392C107.744 14.136 107.368 14.008 106.904 14.008C106.44 14.008 106.06 14.136 105.764 14.392C105.476 14.64 105.3 14.988 105.236 15.436ZM111.56 19V13.084H112.772V13.78H112.964C113.076 13.572 113.256 13.388 113.504 13.228C113.752 13.068 114.088 12.988 114.512 12.988C114.952 12.988 115.304 13.08 115.568 13.264C115.84 13.44 116.044 13.668 116.18 13.948H116.372C116.508 13.676 116.704 13.448 116.96 13.264C117.224 13.08 117.596 12.988 118.076 12.988C118.46 12.988 118.8 13.068 119.096 13.228C119.392 13.38 119.628 13.612 119.804 13.924C119.98 14.228 120.068 14.608 120.068 15.064V19H118.832V15.16C118.832 14.8 118.732 14.524 118.532 14.332C118.34 14.132 118.064 14.032 117.704 14.032C117.32 14.032 117.012 14.156 116.78 14.404C116.548 14.652 116.432 15.008 116.432 15.472V19H115.196V15.16C115.196 14.8 115.096 14.524 114.896 14.332C114.704 14.132 114.428 14.032 114.068 14.032C113.684 14.032 113.376 14.156 113.144 14.404C112.912 14.652 112.796 15.008 112.796 15.472V19H111.56ZM125.569 19.168C124.993 19.168 124.549 19.064 124.237 18.856C123.933 18.648 123.705 18.416 123.553 18.16H123.361V19H122.149V10.6H123.385V13.888H123.577C123.673 13.728 123.801 13.576 123.961 13.432C124.121 13.28 124.333 13.156 124.597 13.06C124.861 12.964 125.185 12.916 125.569 12.916C126.065 12.916 126.521 13.036 126.937 13.276C127.353 13.516 127.685 13.864 127.933 14.32C128.181 14.776 128.305 15.32 128.305 15.952V16.132C128.305 16.772 128.177 17.32 127.921 17.776C127.673 18.224 127.341 18.568 126.925 18.808C126.517 19.048 126.065 19.168 125.569 19.168ZM125.209 18.088C125.745 18.088 126.185 17.916 126.529 17.572C126.881 17.228 127.057 16.736 127.057 16.096V15.988C127.057 15.356 126.885 14.868 126.541 14.524C126.197 14.18 125.753 14.008 125.209 14.008C124.681 14.008 124.241 14.18 123.889 14.524C123.545 14.868 123.373 15.356 123.373 15.988V16.096C123.373 16.736 123.545 17.228 123.889 17.572C124.241 17.916 124.681 18.088 125.209 18.088ZM132.848 19.168C132.248 19.168 131.724 19.044 131.276 18.796C130.828 18.54 130.476 18.184 130.22 17.728C129.972 17.264 129.848 16.728 129.848 16.12V15.976C129.848 15.36 129.972 14.824 130.22 14.368C130.468 13.904 130.812 13.548 131.252 13.3C131.7 13.044 132.216 12.916 132.8 12.916C133.368 12.916 133.864 13.044 134.288 13.3C134.72 13.548 135.056 13.896 135.296 14.344C135.536 14.792 135.656 15.316 135.656 15.916V16.384H131.108C131.124 16.904 131.296 17.32 131.624 17.632C131.96 17.936 132.376 18.088 132.872 18.088C133.336 18.088 133.684 17.984 133.916 17.776C134.156 17.568 134.34 17.328 134.468 17.056L135.488 17.584C135.376 17.808 135.212 18.044 134.996 18.292C134.788 18.54 134.512 18.748 134.168 18.916C133.824 19.084 133.384 19.168 132.848 19.168ZM131.12 15.436H134.396C134.364 14.988 134.204 14.64 133.916 14.392C133.628 14.136 133.252 14.008 132.788 14.008C132.324 14.008 131.944 14.136 131.648 14.392C131.36 14.64 131.184 14.988 131.12 15.436ZM137.444 19V13.084H138.656V13.78H138.848C138.944 13.532 139.096 13.352 139.304 13.24C139.52 13.12 139.784 13.06 140.096 13.06H140.804V14.176H140.048C139.648 14.176 139.32 14.288 139.064 14.512C138.808 14.728 138.68 15.064 138.68 15.52V19H137.444Z"
                    fill="#793EF5"
                />
                <rect
                    x="1"
                    y="1"
                    width="151"
                    height="28"
                    rx="8"
                    stroke="#793EF5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 3"
                />
            </svg>
        </button>
    );
};

export default AddRoleButton;
