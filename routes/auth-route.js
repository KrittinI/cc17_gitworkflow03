const { Router } = require('express')

const authRouter = Router()

authRouter.post('/register', (req, res, next) => {
    console.log("Register");
})

module.exports = authRouter