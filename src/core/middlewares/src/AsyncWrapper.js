module.exports = class AsyncWrapper {
    constructor() { }
    wrap = fn =>
        (req, res, next) =>
            fn(req, res, next)
                .catch(next)
}