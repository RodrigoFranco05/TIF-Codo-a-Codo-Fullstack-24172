from app.database import get_db

class Accion:
    def __init__(self, id_accion=None, ticker=None, cantidad=None, precio_compra=None, activo=True):
        self.id_accion= id_accion
        self.ticker= ticker
        self.cantidad=cantidad
        self.precio_compra= precio_compra
        self.activo= activo
        
        