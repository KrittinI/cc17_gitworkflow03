const express = require('express')
const error = require('./middlewares/error')
const authRouter = require('./routes/auth-route')
const notFound = require('./middlewares/not-found')

const app = express();

app.use('/auth', authRouter)
app.use("/login", (req, res) => {
    res.json({ msg: "Login......" });

});

app.use("/verify", (req, res) => {
    res.status(200).json({ msg: "verified already" })
});


app.use(notFound)
app.use(error)

app.use('/auth', authRouter)

app.use(notFound)
app.use(error)

const PORT = 8000
app.listen(PORT, () => { console.log(`SERVER ON PORT ${PORT}`); })
