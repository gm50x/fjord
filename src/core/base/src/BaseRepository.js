/**
 * Independent
 * 
 * Dep. Tree: Repository > Data
 */

module.exports = class BaseRepository {
    constructor(di = { data }) {
        this.data = di.data
    }

    async getAll() {
        return Promise.resolve(this.data)
    }

    async getById(id) {
        return Promise.resolve(this.data.find(item => item.id === id))
    }
}