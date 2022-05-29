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
    practicante.password = generate_password_hash(password)
    practicante.fecha_nacimiento = fecha_nacimiento
    practicante.comuna_id = comuna_id

    practicante.save()

    return jsonify(practicante.serialize()), 200

@app.route('/api/empresa-register', methods=['POST'])
def register_empresa():
    razon_social = request.json.get("razon_social")
    email = request.json.get("email")
    password = request.json.get("password")
    telefono = request.json.get("telefono")
    
    empresa = Empresa()
    empresa.razon_social = razon_social
    empresa.email = email
    empresa.password = generate_password_hash(password)
    empresa.telefono = telefono
   
    empresa.save()

    return jsonify(empresa.serialize()), 200

@app.route('/create-oferta', methods=['POST'])
def create_oferta():
    titulo = request.json.get("titulo")
    area = request.json.get("area")
    carrera_requerida = request.json.get("carrera_requerida")
    descripcion = request.json.get("descripcion")
    fecha_inicio = request.json.get("fecha_inicio")
    fecha_termino = request.json.get("fecha_termino")
    comuna_id = request.json.get("comuna_id")
    empresa_id = request.json.get("empresa_id")
    
    oferta = Oferta()
    oferta.titulo = titulo
    oferta.area = area
    oferta.carrera_requerida = carrera_requerida
    oferta.descripcion = descripcion
    oferta.fecha_inicio = fecha_inicio
    oferta.fecha_termino = fecha_termino
    oferta.comuna_id = comuna_id
    oferta.empresa_id = empresa_id
   
    oferta.save()

    return jsonify(oferta.serialize()), 200

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

    return jsonify(postulacion.serialize()), 200

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

    return jsonify(administrador.serialize()), 200

#Devuelve todas las regiones

@app.route('/comuna', methods=['GET'])
def showComuna():
    allComuna = Comuna.query.all()
    allComuna = list(map(lambda x: x.serialize(), allComuna))

    return jsonify(allComuna), 200

@app.route('/practicante', methods=['GET'])
def showPracticante():
    allPracticante = Practicante.query.all()
    allPracticante = list(map(lambda x: x.serialize(), allPracticante))

    return jsonify(allPracticante), 200

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

    return jsonify(allEmpresa), 200

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

    return jsonify(allOferta), 200

@app.route('/oferta-id', methods=['GET'])
def showOferta_id():
    oferta_id = request.json.get("oferta_id")
    oferta = Oferta.query.filter_by(id = oferta_id)
    oferta = list(map(lambda x: x.serialize(), oferta))

    return jsonify(oferta), 200

@app.route('/postulacion', methods=['GET'])
def showPostulacion():
    allPostulacion = Postulacion.query.all()
    allPostulacion = list(map(lambda x: x.serialize(), allPostulacion))

    return jsonify(allPostulacion), 200

@app.route('/postulacion-id', methods=['GET'])
def showPostulacion_id():
    postulacion_id = request.json.get("postulacion_id")
    postulacion = Postulacion.query.filter_by(id = postulacion_id)
    postulacion = list(map(lambda x: x.serialize(), postulacion))

    return jsonify(postulacion), 200

@app.route('/api/empresa-register/<int:id>', methods=['PUT'])
def update_empresa(id):
    razon_social = request.json.get("razon_social")
    if not razon_social: return jsonify({"msg": "Razon social es requerida"}), 400
    email = request.json.get("email")
    if not email: return jsonify({"msg": "Email es requerido"}), 400
    foto_perfil = request.json.get("foto_perfil")
    biografia = request.json.get("biografia")
    telefono = request.json.get("telefono")
    if not telefono: return jsonify({"msg": "telefono es requerido"}), 400

    empresa = Empresa.query.get(id)
    if not empresa: return jsonify({"msg": "La empresa no existe"}), 404

    empresa_exist = Empresa.query.filter_by(razon_social=razon_social).first()
    if empresa_exist and empresa_exist.id != id: return jsonify({"msg": "La empresa ya existe" %empresa_exist.id}), 400

    empresa.razon_social = razon_social
    empresa.email = email
    empresa.foto_perfil = foto_perfil
    empresa.biografia = biografia
    empresa.telefono = telefono
    empresa.update()

    data = {
        "code": 200,
        "msg": "Empresa actualizada",
        "empresa": empresa.serialize()
    }

    return jsonify(data), 200

@app.route('/api/empresa-register/<int:id>', methods=['DELETE'])
def delete_empresa(id):
    empresa = Empresa.query.get(id)
    if not empresa: return jsonify({"msg": "La empresa no existe"}), 404
    empresa.delete()

    data = {
         "code": 200,
         "msg": "Empresa borrada"
    }
    return jsonify(data)

@app.route('/api/admin-register/<int:id>', methods=['PUT'])
def update_admin(id):
    nombre = request.json.get("nombre")
    if not nombre: return jsonify({"msg": "Nombre es requerido"}), 400
    apellido = request.json.get("apellido")
    if not apellido: return jsonify({"msg": "Apellido es requerido"}), 400
    email = request.json.get("email")
    if not email: return jsonify({"msg": "Email es requerido"}), 400

    administrador = Administrador.query.get(id)
    if not administrador: return jsonify({"msg": "El administrador no existe"}), 404

    email_exist = Administrador.query.filter_by(email=email).first()
    if email_exist and email_exist.id != id: return jsonify({"msg": "Este email ya esta siendo utilizado" %email_exist.id}), 400

    administrador.nombre = nombre
    administrador.apellido = apellido
    administrador.email = email
    administrador.update()

    data = {
        "code": 200,
        "msg": "Administrador actualizado",
        "administrador": administrador.serialize()
    }

    return jsonify(data), 200

@app.route('/api/admin-register/<int:id>', methods=['DELETE'])
def delete_admin(id):
    administrador = Administrador.query.get(id)
    if not administrador: return jsonify({"msg": "El administrador no existe"}), 404
    administrador.delete()

    data = {
         "code": 200,
         "msg": "Administrador borrado"
    }
    return jsonify(data)

@app.route('/api/user-register/<int:id>', methods=['PUT'])
def update_user(id):
    nombre = request.json.get("nombre")
    if not nombre: return jsonify({"msg": "Nombre es requerido"}), 400
    apellido = request.json.get("apellido")
    if not apellido: return jsonify({"msg": "Apellido es requerido"}), 400
    email = request.json.get("email")
    if not email: return jsonify({"msg": "Email es requerido"}), 400
    fecha_nacimiento = request.json.get("fecha_nacimiento")
    if not fecha_nacimiento: return jsonify({"msg": "Fecha de nacimiento es requerido"}), 400
    institucion = request.json.get("institucion")
    foto_perfil = request.json.get("foto_perfil")
    biografia = request.json.get("biografia")
    carrera_estudio = request.json.get("carrera_estudio")
    telefono = request.json.get("telefono")
    anexo1 = request.json.get("anexo1")
    anexo2 = request.json.get("anexo2")
    comuna_id = request.json.get("comuna_id")
    if not comuna_id: return jsonify({"msg": "Comuna es requerida"}), 400

    practicante = Practicante.query.get(id)
    if not practicante: return jsonify({"msg": "El practicante no existe"}), 404

    email_exist = Practicante.query.filter_by(email=email).first()
    if email_exist and email_exist.id != id: return jsonify({"msg": "Este email ya esta siendo utilizado" %email_exist.id}), 400

    practicante.nombre = nombre
    practicante.apellido = apellido
    practicante.email = email
    practicante.fecha_nacimiento = fecha_nacimiento
    practicante.institucion = institucion
    practicante.foto_perfil = foto_perfil
    practicante.biografia = biografia
    practicante.carrera_estudio = carrera_estudio
    practicante.telefono = telefono
    practicante.anexo1 = anexo1
    practicante.anexo2 = anexo2
    practicante.comuna_id = comuna_id
    practicante.update()

    data = {
        "code": 200,
        "msg": "Practicante actualizado",
        "practicante": practicante.serialize()
    }

    return jsonify(data), 200

@app.route('/api/user-register/<int:id>', methods=['DELETE'])
def delete_user(id):
    practicante = Practicante.query.get(id)
    if not practicante: return jsonify({"msg": "El practicante no existe"}), 404
    practicante.delete()

    data = {
         "code": 200,
         "msg": "Practicante borrado"
    }
    return jsonify(data)

@app.route('/create-oferta/<int:id>', methods=['PUT'])
def update_oferta(id):
    titulo = request.json.get("titulo")
    if not titulo: return jsonify({"msg": "titulo es requerido"}), 400
    area = request.json.get("area")
    if not area: return jsonify({"msg": "area es requeridadescripcion"}), 400
    descripcion = request.json.get("descripcion")
    if not descripcion: return jsonify({"msg": "descripcion es requerida"}), 400
    carrera_requerida = request.json.get("carrera_requerida")
    if not carrera_requerida: return jsonify({"msg": "carrera requerida es requerida"}), 400
    fecha_inicio = request.json.get("fecha_inicio")
    if not fecha_inicio: return jsonify({"msg": "fecha inicio es requerida"}), 400
    fecha_termino = request.json.get("fecha_termino")
    if not fecha_termino: return jsonify({"msg": "fecha termino es requerida"}), 400
    comuna_id = request.json.get("comuna_id")
    if not comuna_id: return jsonify({"msg": "Comuna es requerida"}), 400
    empresa_id = request.json.get("empresa_id")
    if not empresa_id: return jsonify({"msg": "empresa es requerida"}), 400

    oferta = Oferta.query.get(id)
    if not oferta: return jsonify({"msg": "La oferta no existe"}), 404

    oferta.titulo = titulo
    oferta.area = area
    oferta.descripcion = descripcion
    oferta.carrera_requerida = carrera_requerida
    oferta.fecha_inicio = fecha_inicio
    oferta.fecha_termino = fecha_termino
    oferta.comuna_id =comuna_id
    oferta.empresa_id = empresa_id
    oferta.update()

    data = {
        "code": 200,
        "msg": "oferta actualizado",
        "oferta": oferta.serialize()
    }

    return jsonify(data), 200

@app.route('/create-oferta/<int:id>', methods=['DELETE'])
def delete_oferta(id):
    oferta = Oferta.query.get(id)
    if not oferta: return jsonify({"msg": "La oferta no existe"}), 404
    oferta.delete()

    data = {
         "code": 200,
         "msg": "Oferta borrada"
    }
    return jsonify(data)

@app.route('/generate-postulacion/<int:id>', methods=['DELETE'])
def delete_postulacion(id):
    postulacion= Postulacion.query.get(id)
    if not postulacion: return jsonify({"msg": "La postulacion no existe"}), 404
    postulacion.delete()

    data = {
         "code": 200,
         "msg": "Postulacion borrada"
    }
    return jsonify(data)

#Login
@app.route('/Login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    practicante = Practicante.query.filter_by(email=username).first()

    if not practicante: return jsonify({"status": "fail", "message": "username/password incorrect" }), 401
    if not check_password_hash(practicante.password, password): return jsonify({"status": "fail", "message": "username/password incorrect"})

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