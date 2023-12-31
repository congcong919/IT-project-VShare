import express, { application } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import AuthRoutes from './Routes/Auth.routes'
import cors from 'cors'
import VideoRoutes from './Routes/Video.routes'

config();
const server = express();
// const history = require('connect-history-api-fallback')
// server.use(history())
// server.use(express.static('static'))
//==============MiddleWares===========================================
server.use(cors())
//==========mongo DB connection========================================
const mongoURI = process.env.mongoURI;
connect(mongoURI, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('connection to mongo DB successful!!!')
})

//==============================server endpoints=============================
server.use(AuthRoutes)
server.use(VideoRoutes)

const PORT = process.env.PORT ?? 3000;


server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})