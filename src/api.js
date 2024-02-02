import axios from 'axios';

export const fetch = async (query, page) => {
    const accessKey = "4Jfng7uyOJaNszhuGWg-WRNyq9VPNeD2gj_Q-wLW-tE";
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 26,
        },
    });
    return response.data.results;
}