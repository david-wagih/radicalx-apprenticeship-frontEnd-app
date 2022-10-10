export const getUserApprenticeships = async (
    userId: string | undefined,
    setApprenticeships: React.Dispatch<React.SetStateAction<[]>>
) => {
    console.log(userId);
    const response = await fetch(
        `http://localhost:3000/minimum_apprenticeship_data?user_id=${userId}`
    );
    const data = await response.json();
    setApprenticeships(data[0].apprenticeships_data);
};
