/**
 * Independent
 * 
 * Dep. Tree: Repository > Data
 */

module.exports = class BaseRepository {
    constructor({ data }) {
        this.data = data
    }

    getAll() {
        return this.data
    }

    getById(id) {
        return this.data.find(item => item.id === id)
    }
}