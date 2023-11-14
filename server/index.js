import Express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'

const API = Express()
const PORT = process.env.PORT || '5000'


const start = async () => {
    try {
        // await mongoose.connect(config.DB_URL)

        API.listen(PORT, () => {
            console.log('server started in port: ', PORT)
        })
    } catch (e) {
        return console.log(e)
    }
}

await start()