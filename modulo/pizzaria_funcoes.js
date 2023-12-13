
const { usuariosTeste } = require('./pizzaria.js')
var pizzaria = require('./pizzaria.js')

produtos = pizzaria.produtosJSON.produtos

const getProdutos = function (){

    let JSONprodutos = {}
    let produtosArray = []

    let status = false

    produtos.forEach((produto) => {

        produto.categorias = produto.categorias
        produtosArray.push(produto)

        status = true
    })

    JSONprodutos.status = status
    JSONprodutos.produtos = produtosArray

    return JSONprodutos
}

const getCategorias = function () {

    let JSONcategorias =  {}
    let arrayCategorias = []
    let categorias = pizzaria.categoriasJSON.categorias

    let status = false

    categorias.forEach((categoria) =>{
        arrayCategorias.push(categoria)

        status = true
    })

    JSONcategorias.status = status
    JSONcategorias.quantidade = arrayCategorias.length
    JSONcategorias.categorias = arrayCategorias
    
    return JSONcategorias
}

const getProdutosCategoria = function (categoriaId){

    let IDcategoria = categoriaId
    let JSONprodutos = {}
    let arrayProdutos = []

    let status = false

    produtos.forEach ((produto) => {

        produto.categorias.forEach((categoria) => {

            if( categoria.id == IDcategoria){

                let JSONproduto = {}
    
                JSONproduto.id = produto.id
                JSONproduto.nome = produto.nome
                JSONproduto.descricao = produto.descricao
                JSONproduto.imagem = produto.imagem
                JSONproduto.valor = produto.preco
                JSONprodutos.categorias = categoria.nome
    
                arrayProdutos.push(JSONproduto)
                status = true
            }
        })

    })

    JSONprodutos.status = status
    JSONprodutos.quantidade = arrayProdutos.length
    JSONprodutos.produtos = arrayProdutos

    return JSONprodutos
}

const getComentarios = function (produtoId){

    let usuarios = pizzaria.usuariosJSON.usuarios
    let idProduto = produtoId
    let JSONcomentarios = {}
    let arrayComentarios = []

    let status = false

    produtos.forEach((produto) => {

        if(produto.id == idProduto){
            
            produto.comentarios.forEach((comentario) =>{
                let JSONcomentario = {}

                JSONcomentario.titulo = comentario.titulo
                JSONcomentario.conteudo = comentario.conteudo
                JSONcomentario.data = comentario.data
                JSONcomentario.avaliacao = comentario.avaliacao

                usuarios.forEach((usuario) => {

                    if(comentario.usuario == usuario.id){

                        JSONcomentario.usuario = usuario.nome
                        JSONcomentario.perfil = usuario.imagem
                        
                        status = true
                    }
                })

                arrayComentarios.push(JSONcomentario)
            })
        }
    })

    JSONcomentarios.status = status
    JSONcomentarios.quantidade = arrayComentarios.length
    JSONcomentarios.comentarios = arrayComentarios

    return JSONcomentarios
}

const getDadosUsuario = function (IDusuario) {

    let usuarioId = IDusuario

    let usuarios = pizzaria.usuariosJSON.usuarios

    let usuarioJSON = {}

    let status = false

    usuarios.forEach((usuario) =>{

        if(usuarioId == usuario.id){
            status = true
            usuarioJSON.usuario = usuario
        }

    })

    usuarioJSON.status = status

    return usuarioJSON
}

//função para mostrar os produtos favoritados
const getFavoritos = function (idUsuario) {

    let usuarioId = idUsuario
    let favoritos = pizzaria.favoritosJSON.usuarios
    let favArray = []
    let favJson = {}

    let status = false

    favoritos.forEach((favorito) => {

        if(favorito.id_usuario == usuarioId){
            favoritosUsuario = favorito.favoritos

            favoritosUsuario.forEach((favItem) => {

                produtos.forEach((produto) =>{
                    if(produto.id == favItem){
                        status = true
                        favArray.push(produto)
                    }
                })
            })
        }

        favJson.favoritos = favArray
        favJson.status = status
    })

    return favJson
}

const getListaUsuarios = function () {

    let JSONusuarios =  {}
    let arrayUsuarios = []
    let usuarios = pizzaria.usuariosJSON.usuarios

    let status = false

    usuarios.forEach((usuario) =>{
        arrayUsuarios.push(usuario)

        status = true
    })

    JSONusuarios.status = status
    JSONusuarios.quantidade = arrayUsuarios.length
    JSONusuarios.usuarios = arrayUsuarios
    
    return JSONusuarios
}

const getProdutoId = (idProduto) =>{

    let produtoId = idProduto

    let status = false
    let JSONproduto = {}

    produtos.forEach((produto) => {
        if(produto.id == produtoId){
            status = true
            JSONproduto.produto = produto
        }
    })
    JSONproduto.status = status

    return JSONproduto
}

let postUsuario = (usuarioNovo) =>{
    pizzaria.usuariosJSON.usuarios.push(usuarioNovo)
}
let toggleFavorito = (idUsuario, idProduto, eFavorito) =>{

    usuario = idUsuario
    produto = idProduto
    fav = eFavorito

    favoritosArray = pizzaria.favoritosJSON.usuarios

    let status = false
    favoritosArray.forEach(user =>{

        if(user.id_usuario == usuario){
            status= true
            if(fav){
                
                user.favoritos.splice(user.favoritos.indexOf(produto), 1)  
            }else{
                user.favoritos.push(produto)
            }
        }
    })
    return status
}


let getTeste = () =>{
    return(usuariosTeste)
}

module.exports ={
    getCategorias,
    getComentarios,
    getDadosUsuario,
    getFavoritos, 
    getProdutos,
    getProdutosCategoria,
    getListaUsuarios,
    getProdutoId,
    postUsuario,
    toggleFavorito,
    getTeste
}