import user from "../models/userModel.js"

//! halaman utama
const halamanUtama = (req, res) => {
    try {
        const pesan = "Selamat datang di halaman utama";
        res.status(200).json(pesan);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

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
const loginUser = async (req, res) => {
    try {
        const userName = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        
        const newUser = new user({
            email: email,
            name: userName,
            password: password,
        })
        console.log(req.body.username);
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
export { getUsers, loginUser, deleteUser, updateUser, halamanUtama }