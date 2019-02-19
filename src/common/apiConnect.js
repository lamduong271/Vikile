const axios = require('axios');

const api = {
    init() {
        
        axios.defaults.baseURL = 'http://localhost:3000';
        const token = localStorage.getItem('access_token');
        console.log(token)
        if (token) {
            console.log('found access token, use it');
            this.setHeaders(token);
        }
    },

    setHeaders(token) {
        console.log(token)
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                resolve({ success: true });
            } else {
                reject(new Error('Token not available'));
            }
        });
    },

    get(resource) {
        return axios
            .get(resource)
            .catch((e) => {
                console.log(e)
                throw e;
            });
    },

    query(resource, slug = '') {
        return axios
            .get(`${resource}?${slug}`)
            .catch((e) => {
                console.log(e)
                throw e;
            });
    },

    post(resource, data) {
        return axios
            .post(resource, data)
            .catch((e) => {
                console.log(e)
                throw e;
            });
    },

    put(resource, data) {
        return axios
            .put(resource, data)
            .catch((e) => {
                console.log(e)
                throw e;
            });
    },

    delete(resource) {
        return axios
            .delete(resource)
            .catch((e) => {
                console.log(e)
                throw e;
            });
    },

}
export default api;