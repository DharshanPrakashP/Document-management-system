const usersService = require("/services/users.service");

exports.registerUser = async function (req,res) {
    try {
        const payload = req.body;
        const { email, password } = payload;
        await usersService.registerUser(email, password);
        res.status(201).json({
            status: true,
            message: 'User registration successful.'
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
} 

exports.getAllUsers = async function (req,res) {
    const data = await usersService.getAllUsers();
    try {
        res.json({
            status: true,
            message: "Got all users details",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
}

exports.updateUser = async function (req,res) {
    try {
        const payload = req.body;
        await usersService.updateUser(payload);
        res.status(204).json({
            status: true,
            message: "User updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        }); 
    }
}

exports.deleteUserById = async function (req,res) {
    try {
        const userId = req.params.id;
        await usersService.deleteUserById(userId);
        res.json({
            status: true,
            message: 'User deleted successfully.'
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
}