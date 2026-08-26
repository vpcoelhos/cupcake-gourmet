from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

# O Controlador que busca os dados no Model e envia para a View
@app.route('/')
def vitrine():
    conexao = sqlite3.connect('banco.db')
    cursor = conexao.cursor()
    
    # Busca todos os cupcakes no banco de dados
    cursor.execute("SELECT * FROM cupcakes")
    dados_cupcakes = cursor.fetchall()
    conexao.close()
    
    # Renderiza o HTML passando os dados obtidos
    return render_template('index.html', cupcakes=dados_cupcakes)

if __name__ == '__main__':
    app.run(debug=True)