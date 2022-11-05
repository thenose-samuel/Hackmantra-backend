const User = require('../models/user');


const registerUser = async (request, response) => {
    try{
        let user = [];
        user = await User.find({ name: `${request.body.name}`});
        console.log(user);
        if(user[0]?.name !== undefined){
            response.status(500).json({
                "status": "user already exists"
            });
        } else {
            const user = await User.create(request.body);
            response.status(200).json({
                "status": "success",
                "data": user,
            });
        }

    } catch (e) {
        console.log(e);
        response.status(500).json({
            "status": "Error",
        })
    }

}

const loginUser = (request, response) => {
    response.status(200).json({
        "username": "test",
        "password": "123",
    });
}

module.exports = { registerUser, loginUser };