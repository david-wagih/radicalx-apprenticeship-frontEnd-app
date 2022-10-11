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

export enum ActionType {
    apprenticeshipTitle = 'apprenticeshipTitle',
    companyLogo = 'companyLogo',
    companyDescription = 'companyDescription',
    apprenticeshipDescription = 'apprenticeshipDescription',
    companyVideo = 'companyVideo',
    teamType = 'teamType',
    teamRoles = 'teamRoles',
    teamAdmin = 'teamAdmin',
    timeline = 'timeline'
}
export type teamRoles = {
    id?: string;
    roleName: string;
    roleDescription: string;
    requiredSkills: string[];
    complimentarySkills: string[];
    minHours: string;
    locationPreferences: string[];
}[];
export type teamRole = {
    id?: string;
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
}[];
export type timeLine = {
    startDate: string;
    endDate: string;
};
export type action = {
    type: string;
    payload: string | File | teamRoles | teamAdmins | timeLine;
};
export type checked = [boolean[], boolean, boolean, boolean, boolean];

export interface State {
    checked: checked;
    apprenticeshipTitle: string;
    companyLogo: File | null;
    companyDescription: string;
    apprenticeshipDescription: string;
    companyVideo: File | null;
    teamType: string;
    teamRoles: teamRoles | [];
    teamAdmins: teamAdmins | [];
    timeline: timeLine | null;
}

export function reducer(state: State, action: action) {
    if (action.type === ActionType.apprenticeshipTitle) {
        return {
            ...state,
            apprenticeshipTitle: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 0, state.checked)
                    : setProgressBarOfIndex(true, 0, 0, state.checked)
        };
    } else if (action.type === ActionType.companyLogo) {
        return {
            ...state,
            companyLogo: action.payload as File,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 1, state.checked)
                    : setProgressBarOfIndex(true, 0, 1, state.checked)
        };
    } else if (action.type === ActionType.apprenticeshipDescription) {
        return {
            ...state,
            apprenticeshipDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 2, state.checked)
                    : setProgressBarOfIndex(true, 0, 2, state.checked)
        };
    } else if (action.type === ActionType.companyDescription) {
        return {
            ...state,
            companyDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 3, state.checked)
                    : setProgressBarOfIndex(true, 0, 3, state.checked)
        };
    } else if (action.type === ActionType.companyVideo) {
        return {
            ...state,
            companyVideo: action.payload as File,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 4, state.checked)
                    : setProgressBarOfIndex(true, 0, 4, state.checked)
        };
    } else if (action.type === ActionType.teamType) {
        return {
            ...state,
            teamType: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 1, 0, state.checked)
                    : setProgressBarOfIndex(true, 1, 0, state.checked)
        };
    } else if (action.type === ActionType.teamRoles) {
        return {
            ...state,
            teamRoles: action.payload as teamRoles,
            //if action.payload is empty array then we will set the progress bar to false
            checked:
                action.payload.length === 0
                    ? setProgressBarOfIndex(false, 2, 0, state.checked)
                    : setProgressBarOfIndex(true, 2, 0, state.checked)
        };
    } else if (action.type === ActionType.teamAdmin) {
        return {
            ...state,
            teamAdmins: action.payload as teamAdmins,
            checked:
                action.payload.length === 0
                    ? setProgressBarOfIndex(false, 3, 0, state.checked)
                    : setProgressBarOfIndex(true, 3, 0, state.checked)
        };
    } else if (action.type === ActionType.timeline) {
        return {
            ...state,
            timeline: action.payload as timeLine,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 4, 0, state.checked)
                    : setProgressBarOfIndex(true, 4, 0, state.checked)
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
