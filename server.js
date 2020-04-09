const express = require('express')
const nunjucks = require('nunjucks');

const server = express()

const db = require('./public/db')

//config arquivos estáticos (css, scripts, imgs)
server.use(express.static('public'))

//habilitar o req.body
server.use(express.urlencoded({extended:true}))

//config num jucks
nunjucks.configure('views', {
    express: server,
    noCache: true,
})

server.get('/', function (req, res) {

    db.all(`select * from ideas`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send('Erro no Banco ')
        }

        const reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 3) {
                lastIdeas.push(idea)
            }
        }

        return res.render('index.html', { ideas: lastIdeas })
    })
})


server.get('/ideias', function (req, res) {

    db.all(`select * from ideas`, function (err, rows) {
    if (err) {
        console.log(err)
        return res.send('Erro no Banco ')
    }
    const reversedIdeas = [...rows].reverse()
    return res.render('ideias.html', { ideas: reversedIdeas })
})
})

server.post('/', function(req, res){
    //inserir dados
    const query = `
        insert into ideas(
            image,
            title,
            category,
            description,
            link    
            )values(?,?,?,?,?);
        `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    db.run(query, values, function(err){
        if (err) {
            console.log(err)
            return res.send('Erro no Banco ')
        } 
            return res.redirect('/ideias')
    })
})



server.listen(3000)