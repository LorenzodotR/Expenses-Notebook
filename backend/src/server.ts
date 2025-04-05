import express from 'express';
import usersRoutes from './modules/users/routes';
import cardsRoutes from './modules/cards/routes';
import banksRoutes from './modules/banks/routes';
import expenseRoutes from './modules/transactions/routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/user', usersRoutes);
app.use('/cards', cardsRoutes);
app.use('/banks', banksRoutes);
app.use('/expense', expenseRoutes);

app.get('/', (req, res) => {
    res.send("Caderno de Apontamentos");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
