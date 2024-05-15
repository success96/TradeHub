require('dotenv').config()

const express = require('express')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models');
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });



app.get('/', async (req, res) => {
    res.json({ msg: "You should not be here" })
})

app.use('/users', require('./routes/users.routes.js'))


const port = process.env.PORT || 8000

try {
    console.log('Connecting to the database!!!');
    db.sequelize.sync();
    app.listen(port, () => {
        console.log('listening at port '+ port)
    })
} catch (error) {
    console.log(error.message);
    
}
