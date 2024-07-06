from flask import Flask
from app.views import *
from app.database import *

app=Flask(__name__)

#Rutas
app.route('/',methods=['GET'])(index)

app.route('/api/portafolio', methods=['GET'])(get_portafolio)
app.route('/api/portafolio/fetch/<int:accion_id>', methods=['GET'])(get_accion)
app.route('/api/portafolio/create', methods=['POST'])(create_accion)
app.route('/api/portafolio/update/<int:accion_id>', methods=['PUT'])(update_accion)
app.route('/api/portafolio/delete/<int:accion_id>', methods =['DELETE'])(delete_accion)

create_table_portafolio()
init_app(app)


if __name__ == '__main__':
    app.run(debug=True)