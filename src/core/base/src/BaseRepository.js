module.exports = class BaseRepository {
    constructor({ data }) {
        this.data = data
    }

    async getAll() {
        return Promise.resolve(this.data)
    }

    async getById(id) {
        return Promise.resolve(this.data.find(item => item.id === id))
    }
}