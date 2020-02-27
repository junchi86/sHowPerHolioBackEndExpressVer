import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
    naverId: Number,
    githubId: Number,
    facebookId: Number,
    email: String
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

const model = mongoose.model('USER', UserSchema)
export default model