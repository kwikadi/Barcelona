import psycopg2

try:
    conn = psycopg2.connect(dbname='group10db', user='group10', host='10.237.27.10', password='group10', port='5433')
except:
    print ("I am unable to connect to the database")