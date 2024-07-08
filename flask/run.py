from flask import Flask
from app.views import *
from flask_cors import CORS
from app.database import *

app=Flask(__name__)

create_table_portafolio()
init_app(app)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})  # Habilita CORS para todas las rutas desde http://127.0.0.1:5500

#Rutas
app.route('/',methods=['GET'])(index)

app.route('/api/portafolio', methods=['GET'])(get_portafolio)
app.route('/api/portafolio/fetch/<int:accion_id>', methods=['GET'])(get_accion)
app.route('/api/portafolio/create', methods=['POST'])(create_accion)
app.route('/api/portafolio/update/<int:accion_id>', methods=['PUT'])(update_accion)
app.route('/api/portafolio/delete/<int:accion_id>', methods =['DELETE'])(delete_accion)


if __name__ == '__main__':
    app.run(debug=True)