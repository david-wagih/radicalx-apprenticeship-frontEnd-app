export const deleteApprenticeship = async (
    apprenticeshipId: string,
    customToken: string
) => {
    console.log(apprenticeshipId);
    console.log(customToken);
    const response = await fetch(
        `http://localhost:4000/delete_apprenticeship/${apprenticeshipId}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${customToken}`
            }
        }
    );
    if (response.ok) {
        console.log('deleted apprenticeship');
    }
};

export const duplicateApprenticeship = async (
    apprenticeshipId: string,
    customToken: string
) => {
    const response = await fetch(
        `http://localhost:4000/duplicate_apprenticeship/${apprenticeshipId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${customToken}`
            }
        }
    );
    if (response.ok) {
        console.log('duplicated apprenticeship');
    }
};
