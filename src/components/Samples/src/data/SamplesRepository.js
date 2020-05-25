/**
 * Independent
 * 
 * Dep. Tree: Repository > Data
 */

const { BaseRepository } = require('../../../../core/base')
module.exports = class SamplesRepository extends BaseRepository {
    constructor(di) {
        super(di)
    }
}