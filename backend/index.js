import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Tersambung dengan database'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(userRoute)

const port = 5000
app.listen(port, () => console.log(`Server berjalan pada port ${port}`));