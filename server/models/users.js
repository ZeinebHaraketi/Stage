import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nom: String,
    prenom: String,
    adresse : String,
    photo: String,
    role: String,
    login: String,
    mdp: String,

}, {timestamps: true})


var User = mongoose.model('User', UserSchema);

export default User;

