import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import favoriteRoutes from './routes/favoriteRoutes.js'

dotenv.config()

connectDB()

const app = express();

app.use(express.json())

const __dirname = path.resolve()

app.use('/api/users', userRoutes)
app.use('/api/favorites', favoriteRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }

const PORT = process.env.PORT || 8100
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} ON ${PORT}`))   


export default app;
