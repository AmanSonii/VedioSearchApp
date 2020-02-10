import axios from 'axios';


const KEY = "AIzaSyDVsALX0iw-WtN66xEzIRoYR-Yh7EmGf4Q";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 15,
        key: `${KEY}`
    }
});
