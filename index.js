const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const dbCon = require("./db/dbCon")



const UserRouter = require('./Routes/UserRouter')


app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', UserRouter)

app.get('/', (req, res) => res.send('Shop App!'))





const port = process.env.PORT || 3001
app.listen(port, () => {
   console.log(`Example app listening on port port!`)
   dbCon
})