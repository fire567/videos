import axios from 'axios';
const KEY = 'AIzaSyA22VqDdq6Eyq4oP6VFX-wPNrPeGUCrT24';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResaults: 5,
        key: KEY,
    }
})
