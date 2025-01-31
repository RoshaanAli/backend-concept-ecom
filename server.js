require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express()

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//DB connection
require("./config/db")();

app.use("/api/v1/auth/",require("./routes/authRoutes"))

app.get("/",(req,res,next)=>{
    res.send("hello world express")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))