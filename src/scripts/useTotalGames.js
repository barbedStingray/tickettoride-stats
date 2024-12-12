import axios from 'axios';

const useTotalGames = async ({ queryKey }) => {
    // const planet = queryKey[1];
    // console.log('FETCH planet', planet);

    try {
        const response = await axios.get(`/review/totalGames/`);
        console.log('FETCH response total games', response.data);
        return response.data;
    } catch (error) {
        console.error('Error in fetching bases:', error);
        throw error;
    }
};

export default useTotalGames;