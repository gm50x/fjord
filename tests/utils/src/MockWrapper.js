module.exports = class MockWrapper {
    constructor() { }
    wrap = fn =>
        (req, res, next) =>
            fn(req, res, next)
                .catch(next)
}