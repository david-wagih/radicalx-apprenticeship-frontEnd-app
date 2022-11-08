import { State } from './Controller';
export const CreatingApprenticeship = (
    formData: State,
    userCredentials: {
        userId: string;
        customToken: string;
    },
    navigate: (path: string) => void,
    apprenticeshipId?: string
) => {
    if (apprenticeshipId === undefined) {
        fetch(
            `http://localhost:4000/create_apprenticeship/${userCredentials?.userId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userCredentials?.customToken}`
                },
                body: JSON.stringify(formData)
            }
        ).then(response => {
            if (response.ok) {
                navigate('/homepage');
            }
        });
    } else {
        fetch(
            `http://localhost:4000/update_apprenticeship/${apprenticeshipId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userCredentials?.customToken}`
                },
                body: JSON.stringify(formData)
            }
        ).then(response => {
            if (response.ok) {
                navigate('/homepage');
            }
        });
    }
};

export const getApprenticeshipData = async (
    setDataForEdit: React.Dispatch<React.SetStateAction<State | null>>,
    userCredentials: {
        userId: string;
        customToken: string;
    },
    id: string
) => {
    if (id !== undefined) {
        const response = await fetch(
            `http://localhost:4000/data/${userCredentials?.userId}/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userCredentials?.customToken}`
                }
            }
        );
        if (response.ok) {
            const data = await response.json();
            const apprenticeships = data.map((apprenticeship: any) => ({
                ...apprenticeship.apprenticeshipData,
                apprenticeshipId: apprenticeship.apprenticeshipID
            }));
            setDataForEdit(apprenticeships[0]);
        }
    }
};
