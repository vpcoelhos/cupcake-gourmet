# Projeto Integrador Transdisciplinar em Engenharia de Software II

## Sobre o Projeto
Este repositório contém a entrega da codificação do Projeto Integrador II (PIT II). A situação-problema escolhida aborda o desenvolvimento de um aplicativo mobile/web para uma loja de cupcakes gourmet, com o objetivo de reestruturar a experiência de compra do usuário e garantir estabilidade sistêmica por meio de testes.

O escopo atual foca na entrega de um Produto Mínimo Viável (MVP) contendo a vitrine de produtos e o fluxo de carrinho de compras.

## Arquitetura e Tecnologias
O projeto foi desenvolvido seguindo o padrão de arquitetura **MVC (Model-View-Controller)** para separar adequadamente as responsabilidades:

* **Model (Banco de Dados):** SQLite. Um banco relacional leve estruturado para armazenar o catálogo de cupcakes.
* **View (Front-end):** HTML5, CSS3 e JavaScript. Interface projetada com foco em simplicidade, clareza e feedback imediato ao usuário (conceitos de IHC aplicados).
* **Controller (Back-end):** Python com o microframework Flask. Responsável por intermediar a comunicação entre o banco de dados e a interface web.
* **Testes (QA):** Pytest para automação de testes unitários, garantindo a validação das rotas e do conteúdo renderizado.

## Como Executar Localmente
Para rodar a aplicação em um ambiente de desenvolvimento local, siga os passos abaixo:

1. Certifique-se de ter o Python instalado em sua máquina.
2. Clone este repositório ou faça o download dos arquivos.
3. Instale as dependências executando no terminal:
   `pip install flask pytest`
4. Inicie o servidor local:
   `python app.py`
5. Abra o navegador e acesse: `http://127.0.0.1:5000`

## Execução dos Testes
Para garantir a integridade da aplicação, os testes unitários podem ser executados com o comando:
`python -m pytest`
