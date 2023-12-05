
var pizzaria = require('./pizzaria.js')

produtos = pizzaria.produtosJSON.produtos

const getProdutos = function (){

    let JSONprodutos = {}
    let produtosArray = []

    let status = false

    produtos.forEach((produto) => {

        produto.categoria = produto.categoria.nome
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
    let favoritos = favoritosJSON.usuarios
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


console.log()

module.exports ={
    getCategorias,
    getComentarios,
    getDadosUsuario,
    getFavoritos, 
    getProdutos,
    getProdutosCategoria
}