
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


app.use((request,response,next) =>{

    response.header('Access-Control-Allow-origin', '*')
    response.header('Acesss-Control-Allow-Methods', 'GET')
    app.use(cors())

    next()
})


app.get('/produtos', cors(), async function(request, response, next){
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let listaDeProdutos = controlePizzaria.getProdutos()

    if(listaDeProdutos){
    response.json(listaDeProdutos)
    response.status(200)
    }else{
        response.json({erro:'itens não encontrados'})
        response.status(404)
    }

    next()

})

app.get('/produtos/categorias', cors(), async function(request, response, next){

   
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let listaCategorias = controlePizzaria.getCategorias()


    if(listaCategorias){
        response.json(listaCategorias)
        response.status(200)
    }else{
        response.json({erro: 'itens não encontrados'})
        response.status(404)
    }

    next()
})

app.get('/produtos/categoria/id/:categoria', cors(), async function(request, response, next){

    let idCategoria = request.params.categoria
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let produtosCategoria = controlePizzaria.getProdutosCategoria(idCategoria)


    if(produtosCategoria){
        response.json(produtosCategoria)
        response.status(200)
    }else{
        response.json({erro: 'itens não encontrados'})
        response.status(404)
    }

    next()

})

app.get('/comentarios/produto/id/:produtoId', cors(), async function(request, response, next){

    let idProduto = request.params.produtoId
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let comentariosProduto = controlePizzaria.getComentarios(idProduto)


    if(comentariosProduto){
        response.json(comentariosProduto)
        response.status(200)
    }else{
        response.json({erro: 'itens não encontrados'})
        response.status(404)
    }


    next()
})

app.get('/produtos/favoritos', cors(), async function(request, response, next){

    let usuarioId = request.query.usuario
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let favoritosUsuario = controlePizzaria.getFavoritos(usuarioId)

    if(favoritosUsuario){
        response.json(favoritosUsuario)
        response.status(200)
        }else{
            response.json({erro:'itens não encontrados'})
            response.status(404)
        }

        next()

})

app.get('/usuario/id/:userId', cors(), async function(request, response, next) {

    let usuarioId = request.params.userId
    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let dadosUsuario = controlePizzaria.getDadosUsuario(usuarioId)

    if(dadosUsuario){
        response.json(dadosUsuario)
        response.status(200)
        }else{
            response.json({erro:'itens não encontrados'})
            response.status(404)
        }

        next()
})

app.get('/usuarios', cors(), async function(request, response, next) {

    let controlePizzaria = require('./modulo/pizzaria_funcoes.js')
    let usuarios = controlePizzaria.getListaUsuarios()

    if(usuarios){
        response.json(usuarios)
        response.status(200)
        }else{
            response.json({erro:'itens não encontrados'})
            response.status(404)
        }

        next()
})

app.listen('8080', function(){
    console.log('API funcionando...')
})
