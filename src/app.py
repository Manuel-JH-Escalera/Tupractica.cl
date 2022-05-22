from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from models import db, Practicante

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)
Migrate(app, db)

@app.route('/')
def root():
    return "hello world"

@app.route('/api/userRegister', methods=['POST'])
def register_user():
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')
    fecha_nacimiento = request.json.get('fecha_nacimiento')
    practicante = Practicante()
    practicante.nombre = nombre
    practicante.apellido = apellido
    practicante.email = email
    practicante.password = password
    practicante.fecha_nacimiento = fecha_nacimiento
    practicante.save()

if __name__ == '__main__':
    app.run()