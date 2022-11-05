export const getUserApprenticeships = async (
    userId: string | undefined,
    setApprenticeships: React.Dispatch<React.SetStateAction<[]>>
) => {
    const response = await fetch(`http://localhost:4000/data/${userId}`);
    const data = await response.json();
    console.log(data);
};
