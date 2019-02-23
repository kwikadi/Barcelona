import psycopg2


def create_connection():
    try:
        conn = psycopg2.connect(dbname='group_32', user='group_32', host='10.17.51.19', password='462-702-921', port='5432')
        return conn
    except:
        print ("I am unable to connect to the database")
    return None

def query(conn, query):
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()
    return rows