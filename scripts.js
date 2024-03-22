// Array de produtos
let produtos = [
    { nome: "Produto 1", preco: 10 },
    { nome: "Produto 2", preco: 20 },
    { nome: "Produto 3", preco: 30 },
    { nome: "Produto 4", preco: 40 }
];

// Função para exibir os produtos na página
function exibirProdutos() {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = ""; // Limpa o conteúdo anterior

    produtos.forEach(produto => {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto");

        const nomeProduto = document.createElement("h3");
        nomeProduto.textContent = produto.nome;

        const precoProduto = document.createElement("p");
        precoProduto.textContent = "Preço: R$" + produto.preco.toFixed(2);

        const btnAdicionar = document.createElement("button");
        btnAdicionar.textContent = "Adicionar ao Carrinho";
        btnAdicionar.addEventListener("click", () => adicionarAoCarrinho(produto));

        divProduto.appendChild(nomeProduto);
        divProduto.appendChild(precoProduto);
        divProduto.appendChild(btnAdicionar);

        conteudo.appendChild(divProduto);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    // Aqui você pode implementar a lógica para adicionar o produto ao carrinho
    console.log("Produto adicionado ao carrinho:", produto);
}

// Chamada inicial para exibir os produtos
exibirProdutos();