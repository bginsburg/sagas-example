import axios from 'axios';

export default {
    fetchData: async (dataId) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${dataId}`);

        return res.data;
    }
}