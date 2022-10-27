export const getUserApprenticeships = async (
    userId: number | undefined,
    setApprenticeships: React.Dispatch<React.SetStateAction<[]>>
) => {
    const response = await fetch(
        `http://localhost:3000/minimum_apprenticeship_data?id=${userId}`
    );
    const data = await response.json();
    const ApenticeshipData = data[0];
    setApprenticeships(ApenticeshipData);
};
