from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from models import db, Practicante, Administrador, Comuna, Empresa, Oferta, Postulacion
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = '33b9b3de94a42d19f47df7021954eaa8' #secret-key

db.init_app(app)
Migrate(app, db)

jwt = JWTManager(app)

@app.route('/')
def root():
    return "hello world"

@app.route('/api/user-register', methods=['POST'])
def register_user():
    nombre = request.json.get("nombre")
    apellido = request.json.get("apellido")
    email = request.json.get("email")
    password = request.json.get("password")
    fecha_nacimiento = request.json.get("fecha_nacimiento")
    comuna_id = request.json.get("comuna_id")

    practicante = Practicante()
    practicante.nombre = nombre
    practicante.apellido = apellido
    practicante.email = email
    practicante.password = password
    practicante.fecha_nacimiento = fecha_nacimiento
    practicante.comuna_id = comuna_id

    practicante.save()

    return jsonify(practicante.serialize())

@app.route('/api/empresa-register', methods=['POST'])
def register_empresa():
    razon_social = request.json.get("razon_social")
    email = request.json.get("email")
    password = request.json.get("password")
    telefono = request.json.get("telefono")
    
    empresa = Empresa()
    empresa.razon_social = razon_social
    empresa.email = email
    empresa.password = password
    empresa.telefono = telefono
   
    empresa.save()

    return jsonify(empresa.serialize())

@app.route('/create-oferta', methods=['POST'])
def create_oferta():
    titulo = request.json.get("titulo")
    area = request.json.get("area")
    carrera_requerida = request.json.get("carrera_requerida")
    fecha_inicio = request.json.get("fecha_inicio")
    fecha_termino = request.json.get("fecha_termino")
    comuna_id = request.json.get("comuna_id")
    empresa_id = request.json.get("empresa_id")
    
    oferta = Oferta()
    oferta.titulo = titulo
    oferta.area = area
    oferta.carrera_requerida = carrera_requerida
    oferta.fecha_inicio = fecha_inicio
    oferta.fecha_termino = fecha_termino
    oferta.comuna_id = comuna_id
    oferta.empresa_id = empresa_id
   
    oferta.save()

    return jsonify(oferta.serialize())

@app.route('/generate-postulacion', methods=['POST'])
def generate_postulacion():
    fecha_postulacion = request.json.get("fecha_postulacion")
    practicante_id = request.json.get("practicante_id")
    oferta_id = request.json.get("oferta_id")
    
    postulacion = Postulacion()
    postulacion.fecha_postulacion = fecha_postulacion
    postulacion.practicante_id = practicante_id
    postulacion.oferta_id = oferta_id
   
    postulacion.save()

    return jsonify(postulacion.serialize())

@app.route('/api/admin-register', methods=['POST'])
def register_admin():
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')

    administrador = Administrador()
    administrador.nombre = nombre
    administrador.apellido = apellido
    administrador.email = email
    administrador.password = password

    administrador.save()

    return jsonify(administrador.serialize())

#Devuelve todas las regiones

@app.route('/comuna', methods=['GET'])
def showComuna():
    allComuna = Comuna.query.all()
    allComuna = list(map(lambda x: x.serialize(), allComuna))

    return jsonify(allComuna)

@app.route('/practicante', methods=['GET'])
def showPracticante():
    allPracticante = Practicante.query.all()
    allPracticante = list(map(lambda x: x.serialize(), allPracticante))

    return jsonify(allPracticante)

@app.route('/practicante-id', methods=['GET'])
def showPracticante_id():
    practicante_id = request.json.get("practicante_id")
    practicante = Practicante.query.filter_by(id = practicante_id)
    practicante = list(map(lambda x: x.serialize(), practicante))

    return jsonify(practicante)

@app.route('/empresa', methods=['GET'])
def showEmpresa():
    allEmpresa = Empresa.query.all()
    allEmpresa = list(map(lambda x: x.serialize(), allEmpresa))

    return jsonify(allEmpresa)

@app.route('/empresa-id', methods=['GET'])
def showEmpresa_id():
    empresa_id = request.json.get("empresa_id")
    empresa = Empresa.query.filter_by(id = empresa_id)
    empresa = list(map(lambda x: x.serialize(), empresa))

    return jsonify(empresa)

@app.route('/oferta', methods=['GET'])
def showOferta():
    allOferta = Oferta.query.all()
    allOferta = list(map(lambda x: x.serialize(), allOferta))

    return jsonify(allOferta)

@app.route('/oferta-id', methods=['GET'])
def showOferta_id():
    oferta_id = request.json.get("oferta_id")
    oferta = Oferta.query.filter_by(id = oferta_id)
    oferta = list(map(lambda x: x.serialize(), oferta))

    return jsonify(oferta)

@app.route('/postulacion', methods=['GET'])
def showPostulacion():
    allPostulacion = Postulacion.query.all()
    allPostulacion = list(map(lambda x: x.serialize(), allPostulacion))

    return jsonify(allPostulacion)

@app.route('/postulacion-id', methods=['GET'])
def showPostulacion_id():
    postulacion_id = request.json.get("postulacion_id")
    postulacion = Postulacion.query.filter_by(id = postulacion_id)
    postulacion = list(map(lambda x: x.serialize(), postulacion))

    return jsonify(postulacion)

#Login
@app.route('/Login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    practicante = Practicante.query.filter_by(email=username).first()

    if not practicante: return jsonify({"status": "fail", "message": "username/password incorrect" }), 401

    expires = datetime.timedelta(minutes=10)
    acces_token = create_access_token(identity=practicante.id, expires_delta=expires)

    data = {
        "status": "succes",
        "message": "Login Succesfully",
        "acces_token": acces_token,
        "user": practicante.serialize()
    }
    return jsonify(data), 200

#Profile
@app.route('/Profile', methods=['GET'])
@jwt_required()
def profile():

    id = get_jwt_identity()
    practicante = Practicante.query.get(id)

    return jsonify(practicante.serialize()), 200

if __name__ == '__main__':
    app.run()