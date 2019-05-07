const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

let favoriteFilms = [];

app.get('/api/films', (req, res, next)=>{
    axios.get('https://ghibliapi.herokuapp.com/films')
        .then(films => {
            res.send(films.data)
        })
})

app.post('/api/films', (req, res, next)=>{
    favoriteFilms.push(req.body)
        res.send(favoriteFilms)
})


app.delete('/api/films/:id', (req, res, next)=>{
   favoriteFilms = favoriteFilms.filter((e, i) => e.id !== req.params.id),
    res.send(favoriteFilms)
    }
)


const port = process.env.PORT || 8081;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})