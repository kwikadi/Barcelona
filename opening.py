from flask import Flask, render_template, request

import db

app = Flask(__name__)
connection = db.create_connection()


@app.route('/')
def landing():
    return render_template("index.html")


@app.route('/compare')
def compare_data():
    return render_template("index.html")


@app.route('/slice/<category>')
def slicendice(category):
    fields = []
    dropdown_data = []
    fields = ["year","district_name","neighborhood_name","age"]
    if category == "deaths":
        if request.args:
            query_cons = "select " + ", ".join(fields) + " from deaths_v where "
            print(request.args.getlist('year'))
            for i in request.args:
                l = request.args.getlist(i)
                # print(v)
                # print(request.args.get(i))
                bracket_value = (', '.join("'" + item + "'" for item in l))
                print(bracket_value)
                query_cons += i + " in (" + bracket_value + ") and "
            query_cons += "1=1"
            print(query_cons)
            sample = db.query(connection, query_cons)            
        else:
            sample = db.query(connection, "select " + ", ".join(fields) + " from deaths_v limit 10")
        for field in fields:
            inter_data = db.query(connection, "select distinct(" + field + ") from deaths_v order by " + field )
            mapped_data = list(map(lambda x: x[0], inter_data))
            dropdown_data.append({field: mapped_data})
            # TODO: Replace with * ?
    return render_template("slice.html", data=dropdown_data, sample=sample, page=category )


@app.route('/agg')
def aggregate():
    return render_template("index.html")


@app.route('/births')
def births():
    constructed_query = "SELECT count(*) FROM births"
    values = db.query(connection, constructed_query)
    print (values)
    return print(values[0])