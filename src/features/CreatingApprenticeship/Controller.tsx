import { useContext } from 'react';

import { RolesContext } from '../../Contexts/RolesContext/RolesContext';

export const initialState: State = {
    checked: [[false, false, false, false, false], false, false, false, false],
    apprenticeshipTitle: '',
    companyLogo: null,
    companyDescription: '',
    apprenticeshipDescription: '',
    companyVideo: null,
    teamType: '',
    teamRoles: [],
    teamAdmins: [],
    timeline: null
};

export type teamRoles = {
    roleName: string;
    roleDescription: string;
    requiredSkills: string[];
    complimentarySkills: string[];
    minHours: string;
    locationPreferences: string[];
}[];
export type teamRole = {
    roleName: string;
    roleDescription: string;
    requiredSkills: string[];
    complimentarySkills: string[];
    minHours: string;
    locationPreferences: string[];
};

export type teamAdmins = {
    name: string;
    email: string;
    linkedIn: string;
    logo: File | string | null;
}[];
export type timeLine = {
    startDate: string;
    endDate: string;
};
export type action = {
    type: string;
    payload: string | File | teamRoles | teamAdmins | timeLine | State | null;
};
export type checked = [boolean[], boolean, boolean, boolean, boolean];

export interface State {
    checked: checked;
    apprenticeshipTitle: string;
    companyLogo: File | string | null;
    companyDescription: string;
    apprenticeshipDescription: string;
    companyVideo: File | null;
    teamType: string;
    teamRoles: teamRoles | [];
    teamAdmins: teamAdmins | [];
    timeline: timeLine | null;
}

export function reducer(state: State, action: action) {
    if (action.type === 'apprenticeshipTitle') {
        return {
            ...state,
            apprenticeshipTitle: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 0, state.checked)
                    : setProgressBarOfIndex(true, 0, 0, state.checked)
        };
    } else if (action.type === 'companyLogo') {
        return {
            ...state,
            companyLogo: action.payload as File,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 1, state.checked)
                    : setProgressBarOfIndex(true, 0, 1, state.checked)
        };
    } else if (action.type === 'apprenticeshipDescription') {
        return {
            ...state,
            apprenticeshipDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 2, state.checked)
                    : setProgressBarOfIndex(true, 0, 2, state.checked)
        };
    } else if (action.type === 'companyDescription') {
        return {
            ...state,
            companyDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 3, state.checked)
                    : setProgressBarOfIndex(true, 0, 3, state.checked)
        };
    } else if (action.type === 'companyVideo') {
        return {
            ...state,
            companyVideo: action.payload as File,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 4, state.checked)
                    : setProgressBarOfIndex(true, 0, 4, state.checked)
        };
    } else if (action.type === 'teamType') {
        return {
            ...state,
            teamType: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 1, 0, state.checked)
                    : setProgressBarOfIndex(true, 1, 0, state.checked)
        };
    } else if (action.type === 'teamRoles') {
        return {
            ...state,
            teamRoles: action.payload as teamRoles,
            checked:
                action.payload !== null && action.payload instanceof Array
                    ? action.payload.length !== 0
                        ? setProgressBarOfIndex(true, 2, 0, state.checked)
                        : setProgressBarOfIndex(false, 2, 0, state.checked)
                    : setProgressBarOfIndex(false, 2, 0, state.checked)
        };
    } else if (action.type === 'teamAdmins') {
        return {
            ...state,
            teamAdmins: action.payload as teamAdmins,
            checked:
                action.payload !== null && action.payload instanceof Array
                    ? action.payload.length !== 0
                        ? setProgressBarOfIndex(true, 3, 0, state.checked)
                        : setProgressBarOfIndex(false, 3, 0, state.checked)
                    : setProgressBarOfIndex(false, 3, 0, state.checked)
        };
    } else if (action.type === 'timeline') {
        return {
            ...state,
            timeline: action.payload as timeLine,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 4, 0, state.checked)
                    : setProgressBarOfIndex(true, 4, 0, state.checked)
        };
    } else if (action.type === 'fillData') {
        const { setNeededRoles } = useContext(RolesContext);
        setNeededRoles((action.payload as State).teamRoles);
        return {
            ...(action.payload as State),
            checked: [[true, true, true, true, true], true, true, true, true]
        };
    }
    return state;
}

//only the first check sign in the progress bar needs five things to be set
//to true(title,logo,company description,apprenticeship description,video):
//so when the title is set we will call setProgressBarOfIndex(0,0,progressBar)
//other parts like team roles will be setProgressBarOfIndex(1,0,progressBar)
const setProgressBarOfIndex = (
    value: boolean,
    indexInChecked: number,
    indexInCheckedOfZero: number,
    checked: [boolean[], boolean, boolean, boolean, boolean]
) => {
    if (indexInChecked === 0) {
        const checkedOfZero = [
            ...checked[0].slice(0, indexInCheckedOfZero),
            value,
            ...checked[0].slice(indexInCheckedOfZero + 1)
        ];
        return [
            checkedOfZero,
            checked[1],
            checked[2],
            checked[3],
            checked[4]
        ] as checked;
    } else {
        return [
            ...checked.slice(0, indexInChecked),
            value,
            ...checked.slice(indexInChecked + 1)
        ] as checked;
    }
};
