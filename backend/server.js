import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import favoriteRoutes from './routes/favoriteRoutes.js'

dotenv.config()

connectDB()

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API IS RUNNING...')
})

app.use('/api/users', userRoutes)
app.use('/api/favorites', favoriteRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} ON ${PORT}`))   