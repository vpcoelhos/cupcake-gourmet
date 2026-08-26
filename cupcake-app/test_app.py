import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_vitrine_status_code(client):
    """Verifica se a página principal carrega com sucesso (HTTP 200)"""
    resposta = client.get('/')
    assert resposta.status_code == 200

def test_vitrine_conteudo(client):
    """Valida se o texto essencial está renderizando na View"""
    resposta = client.get('/')
    assert b'Vitrine de Cupcakes Gourmet' in resposta.data