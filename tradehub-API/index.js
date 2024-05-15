require('dotenv').config()

const express = require('express')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models');


app.get('/', async (req, res) => {
    res.json({ msg: "You should not be here" })
})

app.use('/users', require('./routes/users.routes.js'))


const port = process.env.PORT || 8000


db.sequelize.sync().then(() => {
    console.log("Sync db.");
}).catch((error) => {
    console.log('Unable to connect to db: ', error.message)
});



// db.sequelize.authenticate().then(()=>{
//     console.log('COnnection has been established successfully')
// }).catch((error)=>{
//     console.log('Unable to connect to the database: ', error.message)
// });

app.listen(port, () => {
    console.log('listening at port '+ port)
});