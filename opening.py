from flask import Flask, render_template, request

import db
import random
import json

app = Flask(__name__)
connection = db.create_connection()


def getRandomColor():
    return "#%06x" % random.randint(0, 0xFFFFFF)

@app.route('/')
def landing():
    return render_template("index.html")


@app.route('/compare')
def compare_data():
    tables = ['Births', 'Deaths', 'Accidents', 'Immigrants', 'Population', 'Unemployment']
    deaths_col = ["year","district_name","neighborhood_name","age"]
    births_col = ["year","district_name","neighborhood_name","gender"]
    acc_col = ["district_name", "neighborhood_name", "street"]
    imm_col = ["year","district_name", "neighborhood_name", "nationality"]
    pop_col = ["year","district_name", "neighborhood_name", "gender", "age"]
    une_col = ["year", "district_name", "neighborhood_name", "gender", "demand_occupation"]
    result = []
    years = [2013, 2014, 2015, 2016, 2017]
    dropdown_deaths = []
    dropdown_births = []
    dropdown_acc = []
    dropdown_imm = []
    dropdown_pop = []
    dropdown_une = []
    for field in deaths_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from deaths_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_deaths.append({field: mapped_data})
    for field in births_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from births_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_births.append({field: mapped_data})
    for field in acc_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from accidents_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_acc.append({field: mapped_data})
    for field in imm_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from immigrants_by_nationality_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_imm.append({field: mapped_data})
    for field in pop_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from population_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_pop.append({field: mapped_data})
    for field in une_col:
        inter_data = db.query(connection, "select distinct(" + field + ") from unemployment_v order by " + field )
        mapped_data = list(map(lambda x: x[0], inter_data))
        dropdown_une.append({field: mapped_data})
    if request.args:
        # TODO: compare over other slices instead of just year ?
        # overlap with aggregation page?
        tables_show = request.args.getlist("table")
        for table in tables_show:
            # print(table)
            if table == "Accidents":
                queryval = "select count(*), extract(year from acc_date) as year from accidents where "
                acc1 = request.args.getlist("acc1")
                if acc1:
                    bracket_value = (', '.join("'" + item + "'" for item in acc1))
                    queryval += "district_name in (" + bracket_value + ") and"
                acc2 = request.args.getlist("acc2")
                if acc2:
                    bracket_value = (', '.join("'" + item + "'" for item in acc2))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                acc3 = request.args.getlist("acc3")
                if acc3:
                    bracket_value = (', '.join("'" + item + "'" for item in acc3))
                    queryval += "street in (" + bracket_value + ") and"
                queryval += " 1=1 group by extract(year from acc_date) order by year asc"
            elif table == "Immigrants":
                queryval = "select sum(count), year from immigrants_by_nationality_v where "
                imm1 = request.args.getlist("imm1")
                if imm1:
                    bracket_value = (', '.join("'" + item + "'" for item in imm1))
                    queryval += "year in (" + bracket_value + ") and"
                imm2 = request.args.getlist("imm2")
                if imm2:
                    bracket_value = (', '.join("'" + item + "'" for item in imm2))
                    queryval += "district_name in (" + bracket_value + ") and"
                imm3 = request.args.getlist("imm3")
                if imm3:
                    bracket_value = (', '.join("'" + item + "'" for item in imm3))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                imm4 = request.args.getlist("imm4")
                if imm4:
                    bracket_value = (', '.join("'" + item + "'" for item in imm4))
                    queryval += "nationality in (" + bracket_value + ") and"
                queryval += " 1=1 group by year order by year asc"

            elif table == "Births":
                queryval = "select sum(count), year from " + table.lower() + "_v where "
                births1 = request.args.getlist("births1")
                if births1:
                    bracket_value = (', '.join("'" + item + "'" for item in births1))
                    queryval += "year in (" + bracket_value + ") and"
                births2 = request.args.getlist("births2")
                if births2:
                    bracket_value = (', '.join("'" + item + "'" for item in births2))
                    queryval += "district_name in (" + bracket_value + ") and"
                births3 = request.args.getlist("births3")
                if births3:
                    bracket_value = (', '.join("'" + item + "'" for item in births3))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                births4 = request.args.getlist("births4")
                if births4:
                    bracket_value = (', '.join("'" + item + "'" for item in births4))
                    queryval += "gender in (" + bracket_value + ") and"
                queryval += " 1=1 group by year order by year asc"
            elif table == "Deaths":
                queryval = "select sum(count), year from " + table.lower() + "_v where "
                deaths1 = request.args.getlist("deaths1")
                if deaths1:
                    bracket_value = (', '.join("'" + item + "'" for item in deaths1))
                    queryval += "year in (" + bracket_value + ") and"
                deaths2 = request.args.getlist("deaths2")
                if deaths2:
                    bracket_value = (', '.join("'" + item + "'" for item in deaths2))
                    queryval += "district_name in (" + bracket_value + ") and"
                deaths3 = request.args.getlist("deaths3")
                if deaths3:
                    bracket_value = (', '.join("'" + item + "'" for item in deaths3))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                deaths4 = request.args.getlist("deaths4")
                if deaths4:
                    bracket_value = (', '.join("'" + item + "'" for item in deaths4))
                    queryval += "gender in (" + bracket_value + ") and"
                queryval += " 1=1 group by year order by year asc"
            elif table == "Population":
                queryval = "select sum(count), year from " + table.lower() + "_v where "
                pop1 = request.args.getlist("pop1")
                if pop1:
                    bracket_value = (', '.join("'" + item + "'" for item in pop1))
                    queryval += "year in (" + bracket_value + ") and"
                pop2 = request.args.getlist("pop2")
                if pop2:
                    bracket_value = (', '.join("'" + item + "'" for item in pop2))
                    queryval += "district_name in (" + bracket_value + ") and"
                pop3 = request.args.getlist("pop3")
                if pop3:
                    bracket_value = (', '.join("'" + item + "'" for item in pop3))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                pop4 = request.args.getlist("pop4")
                if pop4:
                    bracket_value = (', '.join("'" + item + "'" for item in pop4))
                    queryval += "gender in (" + bracket_value + ") and"
                pop5 = request.args.getlist("pop5")
                if pop5:
                    bracket_value = (', '.join("'" + item + "'" for item in pop5))
                    queryval += "age in (" + bracket_value + ") and"

                queryval += " 1=1 group by year order by year asc"
            elif table == "Unemployment":
                queryval = "select sum(count), year from " + table.lower() + "_v where "
                une1 = request.args.getlist("une1")
                if une1:
                    bracket_value = (', '.join("'" + item + "'" for item in une1))
                    queryval += "year in (" + bracket_value + ") and"
                une2 = request.args.getlist("une2")
                if une2:
                    bracket_value = (', '.join("'" + item + "'" for item in une2))
                    queryval += "district_name in (" + bracket_value + ") and"
                une3 = request.args.getlist("une3")
                if une3:
                    bracket_value = (', '.join("'" + item + "'" for item in une3))
                    queryval += "neighborhood_name in (" + bracket_value + ") and"
                une4 = request.args.getlist("une4")
                if une4:
                    bracket_value = (', '.join("'" + item + "'" for item in une4))
                    queryval += "gender in (" + bracket_value + ") and"
                une5 = request.args.getlist("une5")
                if une5:
                    bracket_value = (', '.join("'" + item + "'" for item in une5))
                    queryval += "demand_occupation in (" + bracket_value + ") and"

                queryval += " 1=1 group by year order by year asc"
            dbdata = db.query(connection, queryval)
            temp = {}
            temp["label"] = table
            temp["borderColor"] = getRandomColor()
            temp["fill"] = "false"
            temp["data"] = []
            # print(dbdata)
            try:
                for i in range(int(dbdata[0][1])-2013):
                    temp["data"].append("null")
            except:
                pass
            temp["data"].extend([dbrow[0] for dbrow in dbdata])
            result.append(temp)
        print(str(json.dumps(result)))
            # result.append({table : db.query(connection, queryval)})
        
    return render_template("compare.html", data=tables, result=json.dumps(result), labels=years,
                            dropdown_deaths=dropdown_deaths, dropdown_acc=dropdown_acc, dropdown_births=dropdown_births,
                            dropdown_imm=dropdown_imm, dropdown_pop=dropdown_pop, dropdown_une=dropdown_une)


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
