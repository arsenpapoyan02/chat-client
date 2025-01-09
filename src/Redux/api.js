import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://chat-server-zjlf.onrender.com',
    headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`}
})

export const usersApi = {
    async register(name, email, password) {
        return await instance.post('auth/register', {
            fullName: name,
            email,
            password
        })
        .then(res => res.data)
    },
    async login(email, password) {
        return await instance.post('auth/login', {
            email,
            password
        })
        .then(res => res.data)
    },
    async getMe() {
        return await instance.get('auth/me').then(res => res.data);
    },
    async getMessages() {
        return await instance.get('messages').then(res => res.data);
    },
    async getMessageById(id) {
        return await instance.get(`messages/${id}`).then(res => res.data);
    },
    async sendMessage(text) {
        return await instance.post('messages', {text}).then(res => res.data);
    },
    async removeMessageById(id) {
        return await instance.delete(`messages/${id}`)
    }
}