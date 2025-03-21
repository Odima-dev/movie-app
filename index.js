import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']\
const url = `mongodb
mongodb+srv://${mongo_username}:${mongo_password}@cluster0.440or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000