import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
    console.log('List users');
    response.json(['Luiz', 'Antonio', 'Casula', 'Fornazzari']);
});

app.listen(3333);
