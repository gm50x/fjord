const { BaseController } = require('../../../../core/base')
module.exports = class AddSample extends BaseController {
    constructor(di) {
        super(di)
    }

    activate = async (req, res) => {
        const { name } = req.body

        if (!name) {
            return Promise.reject(new Error('Validation Error: provided id is not valid'))
        }

        const sample = await this.service.addSample({ name })
        res.header('Location', `/samples/${sample.id}`)
        return res.status(200).end()
    }
}