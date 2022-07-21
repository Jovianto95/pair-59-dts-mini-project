import axios from 'axios';

const tmdbInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '97983a5b64cdc0f6526a1cb435a69623'
    },
});

export default tmdbInstance;