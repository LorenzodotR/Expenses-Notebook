import Express from 'express';

const app = Express();
const port = 3030

app.get('/', (req, res) => {
    res.send("Caderno de Apontamentos");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})