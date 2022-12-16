import express from 'express'
import path from 'path'
import hbs from 'hbs'
import request from 'request'
import { fileURLToPath } from 'url'

const port = 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

const staticPath = path.join (__dirname, '../public')
const viewsPath = path.join (__dirname, '../templates/views')
const partialsPath = path.join (__dirname, '../templates/partials')


app.set ('view engine', 'hbs')
app.set ('views', viewsPath)
hbs.registerPartials (partialsPath)
app.use (express.static(staticPath))

app.get ('/', (req, res) => {
    res.render ('index');
})

app.get ('*', (req, res) => {
    res.render ('404');
})

app.listen (port, () => {
    console.log (`server is listening to port: ${port}`);
})

