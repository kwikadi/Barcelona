from flask import Flask, render_template

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
    if category == "deaths":
        fields = ["year","district_name","neighborhood_name","age"]
        for field in fields:
            inter_data = db.query(connection, "select distinct(" + field + ") from deaths_v order by " + field )
            mapped_data = list(map(lambda x: x[0], inter_data))
            dropdown_data.append({field: mapped_data})
            # TODO: Replace with * ?
        sample = db.query(connection, "select " + ", ".join(fields) + " from deaths_v limit 10")
    return render_template("slice.html", data=dropdown_data, sample=sample )


@app.route('/agg')
def aggregate():
    return render_template("index.html")


@app.route('/births')
def births():
    constructed_query = "SELECT count(*) FROM births"
    values = db.query(connection, constructed_query)
    print (values)
    return print(values[0])