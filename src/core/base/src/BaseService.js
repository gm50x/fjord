module.exports = class BaseService {
    constructor(di = { repository }) {
        this.repository = di.repository
    }
}