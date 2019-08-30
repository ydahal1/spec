const express = require('express');

const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//Initialize Middleware
app.use(express.json({extended : false}))

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Servr running"))

//Define routes
app.use('/api/registerHuts', require('./routes/api/registerHuts'));
app.use('/api/renderHuts', require('./routes/api/renderHuts'));



app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
});