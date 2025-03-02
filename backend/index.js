import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'
import fetch from 'node-fetch';


dotenv.config();
const app=express();
const port=process.env.PORT ||  8000;
const corsOptions={
    origin:true,
    credentials:true
}


// database connection
mongoose.set('strictQuery',false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Database Connected");
    }catch(err){
        console.log("MongoDB Database Connection Failed");
    }
}


//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);


app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: 'City name is required' });

    const API_KEY = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);
})