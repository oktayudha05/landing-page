import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Tersambung dengan database'))

app.use(cors())
app.use(express.json())

const port = 5000
app.listen(port, () => console.log(`Server berjalan pada port ${port}`));