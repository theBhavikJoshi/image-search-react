import axios from 'axios';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com/';
const UNSPLASH_CLIENT_ID = 'CLIENT_ID';

export default axios.create({
  baseURL: UNSPLASH_BASE_URL,
  headers: {
    'Accept-Version': 'v1',
    'Authorization': `Client-ID ${UNSPLASH_CLIENT_ID}`
  }
});
