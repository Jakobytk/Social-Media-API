const { ObjectId } = require('mongoose').Types;
const { User, thought } = require('../models');

module.exports = {

    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getUser(req, res) {
        try {
            const user = await User.findOne(
                { _id: req.params.thoughts, _id: req.params.friends }
                )
                .select('-__v');

        if (!user) {
            return res.status(404).json({message: "No User"})
        }

        res.json({user});
        
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async newUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.UserId },
                { $addToSet: { _id: req.params.UserId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: "No User"
                });
            }
            res.json({ message: "Success" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.UserId });

            if (!user) {
                return res.status(404).json({ message: "No User" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

};