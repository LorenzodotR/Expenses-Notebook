import Express from 'express';
import userRoutes from './routes/userRoutes'

const app = Express();
const port = 3030

app.use('/api', userRoutes)

app.get('/', (req, res) => {
    res.send("Caderno de Apontamentos");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})