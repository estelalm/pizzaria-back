
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
    let controlePizzaria = require('./modulo/pizzaria_funcoes')
    let listaDeProdutos = controlePizzaria.getProdutos()

    response.json(listaDeProdutos)
    response.status(200)

    next()
})
app.get('/produtos/categoria/id/:categoria', cors(), async function(request, response, next){

    let idCategoria = request.params.categoria
    let controlePizzaria = require('./modulo/pizzaria_funcoes')
    let produtosCategoria = controlePizzaria.getProdutosCategoria(idCategoria)

    response.json(produtosCategoria)
    response.status(200)

    if(produtosCategoria){
        response.json(produtosCategoria)
        response.status(200)
    }else{
        response.json({erro: 'itens não encontrados'})
        response.status(404)
    }

    next()
})
app.get('/produtos/categorias', cors(), async function(request, response, next){

   
    let controlePizzaria = require('./modulo/pizzaria_funcoes')
    let listaCategorias = controlePizzaria.getCategorias()

    response.json(listaCategorias)
    response.status(200)

    if(listaCategorias){
        response.json(listaCategorias)
        response.status(200)
    }else{
        response.json({erro: 'itens não encontrados'})
        response.status(404)
    }

    next()
})



app.listen('8080', function(){
    console.log('API funcionando...')
})
