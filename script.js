// ATENÇÃO: Substitua a URL abaixo pela URL real do seu Web Service no Render
const API_URL = 'https://cupcake-gourmet-api.onrender.com';

// Buscar e exibir a lista de cupcakes ao carregar a página
async function carregarCupcakes() {
    const container = document.getElementById('lista-cupcakes');
    try {
        const resposta = await fetch(`${API_URL}/cupcakes`);
        const cupcakes = await resposta.json();

        container.innerHTML = '';

        if (cupcakes.length === 0) {
            container.innerHTML = '<p>Nenhum cupcake cadastrado no banco de dados.</p>';
            return;
        }

        cupcakes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card-cupcake';
            card.innerHTML = `
                <img src="${item.imagem_url || 'https://via.placeholder.com/150'}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p>${item.descricao || ''}</p>
                <p class="preco">R$ ${parseFloat(item.preco).toFixed(2)}</p>
            `;
            container.appendChild(card);
        });
    } catch (erro) {
        container.innerHTML = '<p style="color: red;">Erro ao carregar cardápio do servidor.</p>';
        console.error('Erro:', erro);
    }
}

// Simular a criação de um pedido
async function fazerPedido() {
    const status = document.getElementById('mensagem-status');
    status.innerText = 'Processando pedido...';

    try {
        const resposta = await fetch(`${API_URL}/pedidos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario_id: 1,
                valor_total: 26.50
            })
        });

        if (resposta.ok) {
            const pedido = await resposta.json();
            status.style.color = 'green';
            status.innerText = `Pedido #${pedido.id} realizado com sucesso!`;
        } else {
            status.style.color = 'red';
            status.innerText = 'Falha ao criar o pedido.';
        }
    } catch (erro) {
        status.style.color = 'red';
        status.innerText = 'Erro ao conectar com o servidor.';
        console.error('Erro:', erro);
    }
}

// Executa a busca assim que a página é aberta
carregarCupcakes();