import user from "../models/userModel.js"

//! lihat user
const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//! tambah user
const postUsers = async (req, res) => {
    try {
        const userName = req.query.name;
        const password = req.query.password;
        const email = req.query.email;
        
        const newUser = new user({
            email: email,
            name: userName,
            password: password,
        })
        console.log(req.query.name);
        const users = await newUser.save();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//! hapus user
const deleteUser = async (req, res) => {
    try {
        const userName = req.params.name;
        const deletedUser = await user.findOneAndDelete({name: userName});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const userName = req.params.name;
        const afterUpdate = req.query.nameUpdate;
        const updatedUser = await user.findOneAndUpdate({name: userName}, {name: afterUpdate});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export { getUsers, postUsers, deleteUser, updateUser }