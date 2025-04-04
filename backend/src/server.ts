import express from 'express';
import usersRoutes from './modules/users/routes';
import cardsRoutes from './modules/cards/routes';
import banksRoutes from './modules/banks/routes';
import expenseRoutes from './modules/transactions/routes';
import { auth } from 'express-oauth2-jwt-bearer';

const app = express();
const port = process.env.PORT || 8080;

const jwtCheck = auth({
    audience: 'localhost:3030',
    issuerBaseURL: 'https://dev-m3dtgp785a5jcxd7.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

app.use(express.json());
app.use('/user', usersRoutes);
app.use('/cards', cardsRoutes);
app.use('/banks', banksRoutes);
app.use('/expense', expenseRoutes);

app.get('/', (req, res) => {
    res.send("Caderno de Apontamentos");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})