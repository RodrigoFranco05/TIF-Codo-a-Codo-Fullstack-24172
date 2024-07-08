from app.database import get_db

class Accion:
    def __init__(self, id_accion=None, ticker=None, cantidad=None, precio_compra=None, activo=True):
        self.id_accion = id_accion
        self.ticker = ticker
        self.cantidad = cantidad
        self.precio_compra = precio_compra
        self.activo = activo


    @staticmethod
    def __get_accion_by_query(query):
        db = get_db()
        cursor =db.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()

        accion= []

        for row in rows:
            accion.append(
                Accion(
                    id_accion= row[0],
                    ticker = row[1],
                    cantidad = row[2],
                    precio_compra = row[3],
                    activo = row[4]
                )
            )
        cursor.close()
        return accion


    @staticmethod
    def get_all_acciones():
        return Accion.__get_accion_by_query(
            """ SELECT * FROM portafolio WHERE activo = true
            ORDER BY id DESC"""
        )
        
    @staticmethod
    def get_by_id(accion_id):
        db = get_db()
        cursor =db.cursor()
        cursor.execute("SELECT * FROM portafolio WHERE id = %s", (accion_id))
        row = cursor.fetchone()
        cursor.close()

        if row:
            return Accion(
                    id_accion= row[0],
                    ticker = row[1],
                    cantidad = row[2],
                    precio_compra = row[3],
                    activo = row[4]
                )
        return None
        
    def save(self):
            db=get_db()
            cursor = db.cursor()
            if self.id_accion:
                cursor.execute(
                    """ 
                    UPDATE portafolio SET ticker = %s, cantidad = %s, precio_compra = %s, activo = %s WHERE id = %s""", (self.ticker, self.cantidad, self.precio_compra, self.activo)
                )
            else:
                cursor.execute(
                    """ INSERT INTO portafolio (ticker, cantidad, precio_compra, activo) VALUES (%s,%s,%s,%s)""", (self.ticker, self.cantidad, self.precio_compra, self.activo)
                )
                self.id_accion = cursor.lastrowid
            db.commit()
            cursor.close()

    def delete(self):
            db = get_db()
            cursor = db.cursor()
            cursor.execute("UPDATE portafolio SET activo = false WHERE id = %s", (self.id_accion))
            db.commit()
            cursor.close()

    def serialize(self):
            return{
                'id' : self.id_accion,
                'ticker' : self.ticker,
                'cantidad': self.cantidad,
                'precio_compra' : self.precio_compra,
                'activo': self.activo
            }