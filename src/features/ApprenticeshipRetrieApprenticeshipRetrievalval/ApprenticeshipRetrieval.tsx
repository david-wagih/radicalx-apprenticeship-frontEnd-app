import react from "react";
const NavBar = () => {
    return (
        <div className="overflow-y-auto py-10 px-7 ml-2 mt-2 mb-2 bg-white w-[237px] h-[950px] shadow-xl rounded-3xl font-sans"> 
        <ul className="list-none no-underline space-y-4">
           <li className=""><a href="/" className="">
           <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.73 2C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9V4.1C22 2.6 21.36 2 19.77 2" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.23 22C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> Dashboard</a></li> 
           <li><a href="/" className="main">
           <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 3.44C17.92 4.72 19 6.73 19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.25 18.4699L19.6 18.8599C19.23 18.9499 18.94 19.2299 18.86 19.5999L18.51 21.0699C18.32 21.8699 17.3 22.1099 16.77 21.4799L12 15.9999L7.22996 21.4899C6.69996 22.1199 5.67996 21.8799 5.48996 21.0799L5.13996 19.6099C5.04996 19.2399 4.75996 18.9499 4.39996 18.8699L2.74996 18.4799C1.98996 18.2999 1.71996 17.3499 2.26996 16.7999L6.16996 12.8999C7.24996 14.4999 8.95996 15.6299 10.95 15.9199C11.29 15.9799 11.64 16.0099 12 16.0099C12.36 16.0099 12.71 15.9799 13.05 15.9199C15.04 15.6299 16.75 14.4999 17.83 12.8999L21.73 16.7999C22.28 17.3399 22.01 18.2899 21.25 18.4699Z" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> Apprenticeships</a></li> 
           <li><a href="/" className=""> 
            <svg className="inline" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9.98994V3.66994C21 2.46994 20.02 1.57994 18.83 1.67994H18.77C16.67 1.85994 13.48 2.92994 11.7 4.04994L11.53 4.15994C11.24 4.33994 10.76 4.33994 10.47 4.15994L10.22 4.00994C8.44 2.89994 5.26 1.83994 3.16 1.66994C1.97 1.56994 1 2.46994 1 3.65994V15.7399C1 16.6999 1.78 17.5999 2.74 17.7199L3.03 17.7599C5.2 18.0499 8.55 19.1499 10.47 20.1999L10.51 20.2199C10.78 20.3699 11.21 20.3699 11.47 20.2199C13.39 19.1599 16.75 18.0499 18.93 17.7599L19.26 17.7199C20.22 17.5999 21 16.6999 21 15.7399V14.0199" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Internships</a>
            </li>
           <li><a href="/" className="">
           <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3699 14L21.7099 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>  Jobs</a></li>
           <li><a href="/" className="">
           <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.88 20.5798L7.97 21.2098C8.76 21.6798 9.78 21.3998 10.25 20.6098L10.36 20.4198C11.26 18.8498 12.74 18.8498 13.65 20.4198L13.76 20.6098C14.23 21.3998 15.25 21.6798 16.04 21.2098L17.77 20.2198C18.68 19.6998 18.99 18.5298 18.47 17.6298C17.56 16.0598 18.3 14.7798 20.11 14.7798C21.15 14.7798 22.01 13.9298 22.01 12.8798V11.1198C22.01 10.0798 21.16 9.21982 20.11 9.21982C19.1 9.21982 18.42 8.81982 18.18 8.18982C17.99 7.69982 18.07 7.05982 18.47 6.36982C18.99 5.45982 18.68 4.29982 17.77 3.77982L16.96 3.31982" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.64 3.57994C12.74 5.14994 11.26 5.14994 10.35 3.57994L10.24 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Settings</a></li>
        </ul>
    </div>

    );
}
export default NavBar;