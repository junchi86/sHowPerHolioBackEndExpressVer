import passport from 'passport'
import User from '../models/User'
import routes from '../routes'

export const getHome = (req, res) => {
    res.send('HOME')
}

export const getLogin = (req, res) => {
    res.send('LOGIN')
}

export const getJoin = (req, res) => {
    res.send('JOIN')
}

export const join = async (req, res, next) => {
    const { email, password, password2 } = req.body
    if (password !== password2) { return res.status(401) }
    else {
        try {
            const user = await User({ email })
            console.log(user)
            const userRegister = await User.register(user, password)
            return res.sendStatus(200)
        }
        catch (error) {
            console.log(error)
            return res.sendStatus(400)
        }
    }
}

export const login = passport.authenticate('local', {
    successRedirect: routes.home,
    failureRedirect: routes.join
})
//로그인

export const logOut = (req, res) => {
    //로그아웃
}