
const registerUser = (request, response) => {
   response.status(200).json({
       "status": "User Created",
   });
}

const loginUser = (request, response) => {
    response.status(200).json({
        "username": "test",
        "password": "123",
    });
}

module.exports = { registerUser, loginUser };