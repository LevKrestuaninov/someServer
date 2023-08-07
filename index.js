import express from 'express'
import ejs from 'ejs'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

//third changing

const app = express()

app.set('view engine', 'ejs')

const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    res.render('user', { username: req.params.username })
})

app.get('/game', (req, res) => {
    res.render('game')
})

const PORT = 3000;
const HOST = 'localhost'

app.listen(PORT, () => {
    console.log(`Server statrts: http://${HOST}:${PORT}`)
})

