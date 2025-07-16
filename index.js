console.log("🔵 Starting index.js...");
const express=require('express');
const bodyParser=require('body-parser');
const todoRoutes=require('./routes/todoRoutes');
require('dotenv').config();
const cors= require('cors');

const app=express();
const port=3001;
app.use(bodyParser.json());
app.use(cors());

app.use('/todos',todoRoutes);
app.get('/',(req,res)=>{
    res.send('Todo API IS Running');

});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})