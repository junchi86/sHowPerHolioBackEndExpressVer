import routes from "./routes"

//로그인 성공 이후에 다시 제작

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = `Cherry Coke!`
    res.locals.pageTitle = ''
    // res.locals.routes = routes
    // res.locals.user = req.user || {}
    next()
}

export const isPublic = (req, res, next) => {
    if (!req.user) { return next() }
    res.redirect(routes.home)
}

export const isPrivate = (req, res, next) => {
    if (req.user) { return next() }
    res.redirect(routes.home)
}