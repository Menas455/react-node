import express from 'express';
import cors from 'cors';
import db from './src/server/db.js';
import blogsrouter from './src/routes/routes.js';

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogsrouter)

try {
    await db.authenticate()
    console.log('conexion a la bd exitosa')
} catch (error) {
    console.log('error al conectar con la bd')
}

// app.get('/', (req, res)=>{
//     res.send('HOLA, MUNDO')
// })


app.listen(4000, ()=>{
    console.log('Iniciado desde el puerto 4000')
})