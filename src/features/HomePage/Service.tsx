export const getUserApprenticeships = async (
    userCredentials: {
        userId: string;
        customToken: string;
    },
    setApprenticeships: React.Dispatch<React.SetStateAction<[]>>
) => {
    const response = await fetch(
        `http://localhost:4000/data/${userCredentials.userId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${userCredentials.customToken}`
            }
        }
    );
    if (response.ok) {
        const data = await response.json();
        const apprenticeships = data.map((apprenticeship: any) => ({
            ...apprenticeship.apprenticeshipData,
            id: apprenticeship.apprenticeshipID
        }));
        setApprenticeships(apprenticeships);
    }
};
