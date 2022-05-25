from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Region(db.Model):
    __tablename__ = 'region'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    provincia= db.relationship('Provincia', backref="region")
        
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre
        }
    
    def serialize_with_contacts(self):
        return {
            "id": self.id,
            "username": self.username,
            "contacts": self.get_contacts()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Provincia(db.Model):
    __tablename__ = 'provincia'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    region_id= db.Column(db.Integer, db.ForeignKey('region.id'))
    comuna= db.relationship('Comuna', backref="provincia")
       
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "region_id": self.region.id
        }
  
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Comuna(db.Model):
    __tablename__ = 'comuna'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    provincia_id= db.Column(db.Integer, db.ForeignKey('provincia.id'))
    practicante= db.relationship('Practicante', backref="comuna")
    oferta= db.relationship('Oferta', backref="comuna")
    
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "provincia_id": self.provincia_id
        }
  
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Practicante(db.Model):
    __tablename__ = 'practicante'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
    fecha_nacimiento = db.Column(db.String(120), nullable=False)
    institucion = db.Column(db.String(120), nullable=True)
    foto_perfil = db.Column(db.String(120), nullable=True)
    biografia = db.Column(db.String(500), nullable=True)
    carrera_estudio = db.Column(db.String(120), nullable=True)
    telefono = db.Column(db.Integer, nullable=True)
    anexo1 = db.Column(db.String(120), nullable=True)
    anexo2 = db.Column(db.String(120), nullable=True)
    comuna_id= db.Column(db.Integer, db.ForeignKey('comuna.id'))
    postulacion = db.relationship('Postulacion', backref="practicante")
        
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "fecha_nacimiento": self.fecha_nacimiento,
            "institucion": self.institucion,
            "foto_perfil": self.foto_perfil,
            "biografia": self.biografia,
            "carrera_estudio": self.carrera_estudio,
            "telefono": self.telefono,
            "anexo1": self.anexo1,
            "anexo2": self.anexo2,
            "comuna_id": self.comuna_id
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Empresa(db.Model):
    __tablename__ = 'empresa'
    id = db.Column(db.Integer, primary_key=True)
    razon_social = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
    foto_perfil = db.Column(db.String(120), nullable=True)
    biografia = db.Column(db.String(500), nullable=True)
    telefono = db.Column(db.Integer, nullable=False)
    oferta = db.relationship('Oferta', backref="empresa")
        
    def serialize(self):
        return {
            "id": self.id,
            "razon_social": self.razon_social,
            "email": self.email,
            "foto_perfil": self.foto_perfil,
            "biografia": self.biografia,
            "telefono":  self.telefono
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Oferta(db.Model):
    __tablename__ = 'oferta'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120), nullable=False)
    area = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(500), nullable=True)
    carrera_requerida = db.Column(db.String(120), nullable=False)
    fecha_inicio = db.Column(db.String(120), nullable=False)
    fecha_termino = db.Column(db.String(120), nullable=False)
    comuna_id= db.Column(db.Integer, db.ForeignKey('comuna.id'))
    empresa_id= db.Column(db.Integer, db.ForeignKey('empresa.id'))
    postulacion = db.relationship('Postulacion', backref="oferta")
    
    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "area": self.area,
            "descripcion": self.descripcion,
            "carrera_requerida": self.carrera_requerida,
            "fecha_inicio": self.fecha_inicio,
            "fecha_termino": self.fecha_termino,
            "comuna_id": self.comuna_id,
            "empresa_id": self.empresa_id
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Postulacion(db.Model):
    __tablename__ = 'postulacion'
    id = db.Column(db.Integer, primary_key=True)
    fecha_postulacion = db.Column(db.String(120), nullable=False)
    practicante_id= db.Column(db.Integer, db.ForeignKey('practicante.id'))
    oferta_id= db.Column(db.Integer, db.ForeignKey('oferta.id'))
  
    def serialize(self):
        return {
            "id": self.id,
            "fecha_postulacion": self.fecha_postulacion,
            "practicante_id": self.practicante_id,
            "oferta_id": self.oferta_id
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Administrador(db.Model):
    __tablename__ = 'administrador'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
   
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


