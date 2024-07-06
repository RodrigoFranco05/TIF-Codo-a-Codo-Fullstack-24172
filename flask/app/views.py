from flask import jsonify, request
from app.models import Accion

def index():
    return jsonify(
        {
            'mensaje': 'Hola mundo Flask'
        }
    )

def get_portafolio():
    portafolio = Accion.get_all_acciones()
    return jsonify([portafolio.serialize() for portafolio in portafolio])

def get_accion(accion_id):
    accion=Accion.get_by_id(accion_id)
    if not Accion:
        return jsonify({'message': 'Accion no encontrada'}), 404
    return jsonify(accion.serialize())

def create_accion():
    data = request.json
    new_accion = Accion(
        ticker= data['ticker'],
        cantidad=data['cantidad'],
        precio_compra=data['precio_compra'],
        activo=True
    )
    new_accion.save()
    return jsonify({'message': 'Accion creada', 'data':data}),201

def update_accion(accion_id):
    accion = Accion.get_by_id(accion_id)
    if not Accion:
        return jsonify({'message': 'Accion no encontrada'}), 404
    

    data = request.json
    accion.ticker=data['ticker']
    accion.cantidad=data['cantidad']
    accion.precio_compra=data['precio_compra']
    accion.save()
    return jsonify({'message': 'Accion modificada', 'data':data, 'id': accion_id})

def delete_accion(accion_id):
    accion= Accion.get_by_id(accion_id)
    if not Accion:
        return jsonify({'message': 'Accion no encontrada'}), 404
    
    accion.activo= False
    accion.save()
    return jsonify({'message': 'Accion modificada'})