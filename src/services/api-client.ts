import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '52e4b3839a5a47b081bb6af6b5bf0b66'
    }
}
);