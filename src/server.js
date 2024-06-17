const express = require('express');
const mustache = require('mustache-express');
const path = require('path');
const mainRoutes = require('./routes/index.js');
const { request } = require('http');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('mustache' , mustache());


app.use(express.static(path.join(__dirname , '../public')))

app.use('/', mainRoutes);
app.use((request, response) =>{
    response.send('pagina nao encontrada')
})


const PORT = 3001
app.listen(PORT)