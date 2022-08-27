import express from 'express';
import mongoose from 'mongoose';
import Users from '../models/users.js';

const router = express.Router();

export const AddUser = async (req, res) => {
    const { nom,prenom,adresse, photo,role,login,mdp } = req.body;

    const newUser = new newUser({ nom, prenom,adresse, photo,role,login,mdp});

    try {
        await newUser.save();

        res.status(201).json(newBlog );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const FindAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const FindSingleUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const UpdateUser = async (req, res) => {
    const { id } = req.params;
    const { nom, prenom,adresse, photo,role,login,mdp } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { nom, prenom,adresse, photo,role,login,mdp, _id: id };

    await Users.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);

}
export const DeleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await Users.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

export default router;
