import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

//Define Routes
app.get('/',(req,res)=>{
    res.json({message:"App is running as expected"})
})

app.get('/health',(req,res)=>{
    res.json({message: "Everything is healthy 😊"})
})


//Start express server
app.listen(PORT,()=>{
    console.log(`Application is up and running on PORT ${PORT}`);
    
})