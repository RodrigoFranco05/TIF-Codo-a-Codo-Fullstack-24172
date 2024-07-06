from flask import jsonify, request

def index():
    return jsonify(
        {
            'mensaje': 'Hola mundo Flask'
        }
    )

def get_portafolio():
    portafolio = [
        {
            'id': 1,
            'ticker' : 'AAPL',
            'cantidad':  10,
            'precio_compra': 1500,
            'activo': True

        },
        {
            'id': 2,
            'ticker' : 'AMZN',
            'cantidad':  10,
            'precio_compra': 1000,
            'activo': True

        },
    ]
    return portafolio

def get_accion(accion_id):
    accion={
        'id': accion_id
    }
    return jsonify(accion)

def create_accion():
    data = request.json
    return jsonify({'message': 'Accion creada', 'data':data}),201

def update_accion(accion_id):
    data = request.json
    return jsonify({'message': 'Accion creada', 'data':data, 'id': accion_id})

def delete_accion(accion_id):
    pass