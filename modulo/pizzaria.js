var categoriasJSON = {
    categorias:[
        {id: 1, nome: "Pizzas Especiais"}, //????????
        {id: 2, nome: "Pizzas Doces"},
        {id: 3, nome: "Pizzas Salgadas"},
        {id: 4, nome: "Pizzas Veganas"},
        {id: 5, nome: "Bebidas"},
        {id: 6, nome: "Sobremesas"}
    ]
}  // nao tenho certeza ainda sobre as categorias............


var produtosJSON = {
            produtos: [
                {
                    id: 1,
                    nome: "Pizza de peperoni com queijo",
                    descricao: "Pepperoni é uma variedade ítalo-americana apimentada do salame seco, feita de carne de porco e bovina, incluindo algumas vezes toucinho. O processo de produção tem como tempero principal a páprica e etapas de fermentação e cozimento gradual do produto",
                    imagem: "peperoni-queijo.png",
                    preco: "19,00",
                    categoria: categoriasJSON.categorias[2],
                    comentarios: [
                        {
                            id: 1,
                            usuario: "Maria da Silva",
                            data: "15/03/2022",
                            avaliacao: 3,
                            comentario: "Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                        },
                        {
                            id: 1,
                            usuario: "Pedro Gomes Dias",
                            data: "21/05/2022",
                            avaliacao: 3,
                            comentario: "Essa pizza é demais, recomendo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                        }
                    ]
                },
                {
                    id: 2,
                    nome: "Pizza de calabresa com queijo",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagem: "calabresa-queijo.png",
                    preco: "16,00",
                    categoria: categoriasJSON.categorias[2],
                    comentarios: [
                    ]
                },
                {
                    id: 3,
                    nome: "Pizza de chocolate com morango",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagem: "chocolate-morango.png",
                    preco: "19,00",
                    categoria: categoriasJSON.categorias[1],
                    comentarios: [
                    ]
                },
                {
                    id: 4,
                    nome: "Pizza vegana",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagem: "chocolate-morango.png",
                    preco: "19,00",
                    categoria: categoriasJSON.categorias[3],
                    comentarios: [
                    ]
                },
                {
                    id: 5,
                    nome: "Bolo de chocolate",
                    descricao: "Bolo. de. chocolate",
                    imagem: "bolo-chocolate.png",
                    preco: "10,00",
                    categoria: categoriasJSON.categorias[4],
                    comentarios: [
                    ]
                },
                {
                    id: 6,
                    nome: "Coca-cola 2L",
                    descricao: "Refrigerante Garrafa 2 litros Embalagem Econômica",
                    imagem: "coca-cola.png",
                    preco: "14,99",
                    categoria: categoriasJSON.categorias[5],
                    comentarios: [
                    ]
                },
                {
                id: 7,
                nome: "Cerveja Heineken",
                descricao: "Bebida Alcoólica Garrafa 1 litro Embalagem Econômica",
                imagem: "cerveja-heineken.png",
                preco: "17,99",
                categoria: categoriasJSON.categorias[5],
                comentarios: [
                ]
            },
            {
                id: 8,
                nome: "Pizza brotinho com queijo e tomate",
                descricao: "Pizza com queijo e tomate, pequena",
                imagem: "broto-queijo-tomate.png",
                preco: "12,00",
                categoria: categoriasJSON.categorias[0],
                comentarios: [
                ]
            }
            ]
}

var usuariosJSON ={
    usuarios: [
        {
            id: 1,
            nome: 'Fulano da Silva',
            email: 'fulano.silva@email.com',
            senha: 'Fulano01',
            telefone: "11111111",
            imagem: "/img/user1.png",
            localizacao: [
                {
                    id: 1,
                    estado: 'SP', 
                    cidade: "Itapevi",
                    logradouro: "Rua Perto de Algum Lugar",
                    bairro: "Jardim Xurupita",
                    numero: "678",
                    pais: 'Brasil'
                }
            ]
        },
        {
            id: 1,
            nome: 'Celeste de Gaulle',
            email: 'gaulle.silva@email.com',
            senha: 'Celeste06',
            telefone: "11111111",
            imagem: "/img/user2.png",
            localizacao: [
                {
                    id: 1,
                    estado: 'SP', 
                    cidade: "Jandira",
                    logradouro: "Rua Pra lá de LOnge",
                    bairro: "Parque da França ",
                    numero: "6",
                    pais: 'Brasil'
                }
            ]
        }
    ]
}

var favoritosJSON = {
    usuarios: [
        {
            id_usuario: 1,
            favoritos: [1, 2, 3]
        },
        {
            id_usuario: 2,
            favoritos: [3, 4]
        }
    ]
}

module.exports = {
    categoriasJSON,
    produtosJSON,
    usuariosJSON,
    favoritosJSON
}