export const deleteApprenticeship = (
    apprenticeshipId: string,
    customToken: string
) => {
    console.log('deleteApprenticeship');
    fetch(`http://localhost:4000/delete_apprenticeship/${apprenticeshipId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${customToken}`
        }
    });
};

export const duplicateApprenticeship = (
    apprenticeshipId: string,
    customToken: string
) => {
    console.log('duplicateApprenticeship');
    fetch(
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
};
