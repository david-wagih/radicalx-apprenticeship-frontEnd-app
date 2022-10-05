export const initialState = {
    checked: [[false, false, false, false, false], false, false, false, false],
    ApprenticeshipTitle: '',
    ApprenticeshipLogo: null,
    ApprenticeshipDescription: '',
    CompanyDescription: '',
    CompanyVideo: null
};

export enum ActionType {
    ApprenticeshipTitle = 'ApprenticeshipTitle',
    ApprenticeshipLogo = 'ApprenticeshipLogo',
    ApprenticeshipDescription = 'ApprenticeshipDescription',
    CompanyDescription = 'CompanyDescription',
    CompanyVideo = 'CompanyVideo'
}

interface State {
    checked: [
        [boolean, boolean, boolean, boolean, boolean],
        boolean,
        boolean,
        boolean,
        boolean
    ];
    ApprenticeshipTitle: string;
    ApprenticeshipLogo: File | null;
    ApprenticeshipDescription: string;
    CompanyDescription: string;
    CompanyVideo: File | null;
}

export function reducer(
    state: State,
    action: { type: string; payload: string | File | null }
) {
    if (action.type === ActionType.ApprenticeshipTitle) {
        return {
            ...state,
            ApprenticeshipTitle: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 0, state.checked)
                    : setProgressBarOfIndex(true, 0, 0, state.checked)
        };
    } else if (action.type === ActionType.ApprenticeshipLogo) {
        return {
            ...state,
            ApprenticeshipLogo: null,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 1, state.checked)
                    : setProgressBarOfIndex(true, 0, 1, state.checked)
        };
    } else if (action.type === ActionType.ApprenticeshipDescription) {
        return {
            ...state,
            ApprenticeshipDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 2, state.checked)
                    : setProgressBarOfIndex(true, 0, 2, state.checked)
        };
    } else if (action.type === ActionType.CompanyDescription) {
        return {
            ...state,
            CompanyDescription: action.payload as string,
            checked:
                action.payload === ''
                    ? setProgressBarOfIndex(false, 0, 3, state.checked)
                    : setProgressBarOfIndex(true, 0, 3, state.checked)
        };
    } else if (action.type === ActionType.CompanyVideo) {
        return {
            ...state,
            CompanyVideo: action.payload as File | null,
            checked:
                action.payload === null
                    ? setProgressBarOfIndex(false, 0, 4, state.checked)
                    : setProgressBarOfIndex(true, 0, 4, state.checked)
        };
    }
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
        console.log('1', checked[1]);
        console.log('2', checked[2]);
        return [checkedOfZero, checked[1], checked[2], checked[3], checked[4]];
    } else {
        return [
            ...checked.slice(0, indexInChecked),
            value,
            ...checked.slice(indexInChecked + 1)
        ];
    }
};
