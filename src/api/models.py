from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Practicante(db.Model):
    __tablename__ = 'practicante'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
    fecha_nacimiento = db.Column(db.datetime.date(), nullable=False)
    institucion = db.Column(db.String(120), nullable=False)
    foto_perfil = db.Column(db.String(120), nullable=True)
    biografia = db.Column(db.String(500), nullable=True)
    carrera_estudio = db.Column(db.String(120), nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    comuna = db.Column(db.String(120), nullable=False)
    contacts = db.relationship('Contact', backref="user")
    

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username
        }
    
    def serialize_with_contacts(self):
        return {
            "id": self.id,
            "username": self.username,
            "contacts": self.get_contacts()
        }

    def get_contacts(self):
        return list(map(lambda contact: contact.serialize(), self.contacts))

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Contact(db.Model):
    __tablename__ = 'contacts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120))
    phone = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone
        }

    def serialize_with_user(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "user": self.user.username
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()