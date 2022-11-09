export const deleteApprenticeship = async (
    apprenticeshipId: string,
    customToken: string
) => {
    const res = await fetch(
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
    if (res.ok) {
        location.reload();
    }
};

export const duplicateApprenticeship = async (
    apprenticeshipId: string,
    customToken: string
) => {
    const res = await fetch(
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
    if (res.ok) {
        location.reload();
    }
};
