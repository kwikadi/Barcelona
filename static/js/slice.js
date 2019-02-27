$(document).ready(function() {
    $('.select2-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-age').select2({
        placeholder: "Select Age(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-gender').select2({
        placeholder: "Select Gender(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-count_Immigrants').hide();
});

$(document).ready(function() {
    $('.select2-count_Emigrants').hide();
});

$(document).ready(function() {
    $('.select2-nationality').select2({
        placeholder: "Select Nationality(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-count').hide();
});
$(document).ready(function() {
    $('.select2-frequency').hide();
});
$(document).ready(function() {
    $('.select2-street').select2({
        placeholder: "Select Street(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-weekday').select2({
        placeholder: "Select Weekday(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-month').select2({
        placeholder: "Select Month(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-day').select2({
        placeholder: "Select Day(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Mild_injuries').select2({
        placeholder: "Select Mild_injuries(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Serious_injuries').select2({
        placeholder: "Select Serious_injuries(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Victims').select2({
        placeholder: "Select Victims(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $(Vehicles_involved).select2({
        placeholder: "Select Vehicles_involved(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-demand_occupation').select2({
        placeholder: "Select Demand_occupation(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-name').select2({
        placeholder: "Select Station name(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Longitude').select2({
        placeholder: "Select Longitude(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Latitude').select2({
        placeholder: "Select Latitude(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-Ubication').select2({
        placeholder: "Select Ubication(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-decade').select2({
        placeholder: "Select Decade(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-code').select2({
        placeholder: "Select Code(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-transport').select2({
        placeholder: "Select Transports(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-station').select2({
        placeholder: "Select Station(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-air_quality').select2({
        placeholder: "Select air_quality(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-O3_Hour').select2({
        placeholder: "Select O3_hour(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-O3_value').select2({
        placeholder: "Select O3_value(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-O3_quality').select2({
        placeholder: "Select O3_quality(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-NO2_Hour').select2({
        placeholder: "Select NO2_hour(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-NO2_value').select2({
        placeholder: "Select NO2_value(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-NO2_quality').select2({
        placeholder: "Select NO2_quality(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-PM10_Hour').select2({
        placeholder: "Select PM10_hour(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-PM10_value').select2({
        placeholder: "Select PM10_value(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-PM10_quality').select2({
        placeholder: "Select PM10_quality(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-generated').select2({
        placeholder: "Select PM10_generated(s)",
        width: '20%'
    });
});
$(document).ready(function() {
    $('.select2-bus_stop').select2({
        placeholder: "Select Bus Stop(s)",
        width: '20%'
    });
});
function deaths() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    ageval = $("#age").select2("val");
    finallocation = "/slice/deaths?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in ageval) {
        finallocation += "&age=" + ageval[x];
    }
    window.location.replace(finallocation);
}

function births() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#gender").select2("val");
    finallocation = "/slice/births?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
    window.location.replace(finallocation);
}

function births() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#gender").select2("val");
    finallocation = "/slice/births?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
    window.location.replace(finallocation);
}

function imm_emi_by_age() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    ageval = $("#age").select2("val");
    finallocation = "/slice/imm_emi_by_age?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in ageval) {
        finallocation += "&age=" + ageval[x];
    }
    window.location.replace(finallocation);
}

function imm_emi_by_gender() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#gender").select2("val");
    finallocation = "/slice/imm_emi_by_gender?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
    window.location.replace(finallocation);
}
function immigrants_by_nationality() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#nationality").select2("val");
    finallocation = "/slice/immigrants_by_nationality?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&nationality=" + genderval[x];
    }
    window.location.replace(finallocation);
}


function population() {
    yearval = $("#year").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#gender").select2("val");
	ageval = $("#age").select2("val");
    finallocation = "/slice/population?" 
    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
	for (x in ageval) {
        finallocation += "&age=" + ageval[x];
    }
    window.location.replace(finallocation);
}

function accidents() {
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    streetval = $("#street").select2("val");
	weekdayval = $("#weekday").select2("val");
	monthval = $("#month").select2("val");
	dayval = $("#day").select2("val");
	Mild_injuriesval = $("#Mild_injuries").select2("val");
	Serious_injuriesval = $("#Serious_injuries").select2("val");
	Victimsval = $("#Victims").select2("val");
	Vehicles_involvedval = $("#Vehicles_involved").select2("val");
    finallocation = "/slice/accidents?" 

    for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in streetval) {
        finallocation += "&street=" + streetval[x];
    }
	for (x in weekdayval) {
        finallocation += "&weekday=" + weekdayval[x].trim();
    }
	for (x in monthval) {
        finallocation += "&month=" + monthval[x].trim();
    }
	for (x in dayval) {
        finallocation += "&day=" + dayval[x];
    }
	for (x in Mild_injuriesval) {
        finallocation += "&Mild_injuries=" + Mild_injuriesval[x];
    }
	for (x in Serious_injuriesval) {
        finallocation += "&Serious_injuries=" + Serious_injuriesval[x];
    }
	for (x in Victimsval) {
        finallocation += "&Victims=" + Victimsval[x];
    }
	for (x in Vehicles_involvedval) {
        finallocation += "&Vehicles_involved=" + Vehicles_involvedval[x];
    }
    window.location.replace(finallocation);
}


function unemployment() {
	yearval = $("#year").select2("val");
	monthval = $("#month").select2("val");
    distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
    genderval = $("#gender").select2("val");
	demand_occupationval = $("#demand_occupation").select2("val");
	
    finallocation = "/slice/unemployment?" 

    for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
	for (x in monthval) {
        finallocation += "&month=" + monthval[x];
    }
	for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }
    for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
	for (x in demand_occupationval) {
        finallocation += "&demand_occupation=" + demand_occupationval[x];
    }

	
    window.location.replace(finallocation);
}

function air_stations() {
	nameval = $("#name").select2("val");
	Longitudeval = $("#Longitude").select2("val");
	Latitudeval = $("#Latitude").select2("val");
    Ubicationval = $("#Ubication").select2("val");
	distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
	
    finallocation = "/slice/air_stations?" 

    for (x in nameval) {
        finallocation += "&name=" + nameval[x];
    }
	for (x in Longitudeval) {
        finallocation += "&Longitude=" + Longitudeval[x];
    }
	for (x in Latitudeval) {
        finallocation += "&Latitude=" + Latitudeval[x];
    }
	for (x in Ubicationval) {
        finallocation += "&Ubication=" + Ubicationval[x];
    }
	for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }

	
    window.location.replace(finallocation);
}

function most_frequent_baby_names() {
	nameval = $("#name").select2("val");
	genderval = $("#gender").select2("val");
	yearval = $("#year").select2("val");
	
    finallocation = "/slice/most_frequent_baby_names?" 

    for (x in nameval) {
        finallocation += "&name=" + nameval[x];
    }
	for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
	for (x in yearval) {
        finallocation += "&year=" + yearval[x];
    }
	
    window.location.replace(finallocation);
}

function most_frequent_names() {
	nameval = $("#name").select2("val");
	genderval = $("#gender").select2("val");
	decadeval = $("#decade").select2("val");
	
    finallocation = "/slice/most_frequent_names?" 

    for (x in nameval) {
        finallocation += "&name=" + nameval[x];
    }
	for (x in genderval) {
        finallocation += "&gender=" + genderval[x];
    }
	for (x in decadeval) {
        finallocation += "&decade=" + decadeval[x];
    }
	
    window.location.replace(finallocation);
}

function transports() {
	codeval = $("#code").select2("val");
	transportval = $("#transport").select2("val");
	Longitudeval = $("#Longitude").select2("val");
	Latitudeval = $("#Latitude").select2("val");
    stationval = $("#station").select2("val");
	distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
	
    finallocation = "/slice/transports?" 

    for (x in codeval) {
        finallocation += "&code=" +  codeval[x];
    }
	for (x in transportval) {
        finallocation += "&transport=" + transportval[x];
    }
	for (x in Longitudeval) {
        finallocation += "&Longitude=" + Longitudeval[x];
    }
	for (x in Latitudeval) {
        finallocation += "&Latitude=" + Latitudeval[x];
    }
	for (x in stationval) {
        finallocation += "&station=" + stationval[x];
    }
	for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }

	
    window.location.replace(finallocation);
}

function air_quality() {
	nameval = $("#name").select2("val");
	air_qualityval = $("#air_quality").select2("val");
	Longitudeval = $("#Longitude").select2("val");
	Latitudeval = $("#Latitude").select2("val");
	
	O3_Hourval = $("#O3_Hour").select2("val");
	O3_qualityval = $("#O3_quality").select2("val");
	O3_valueval = $("#O3_value").select2("val");
	
	NO2_Hourval = $("#NO2_Hour").select2("val");
	NO2_qualityval = $("#NO2_quality").select2("val");
	NO2_valueval = $("#NO2_value").select2("val");
	
	PM10_Hourval = $("#PM10_Hour").select2("val");
	PM10_qualityval = $("#PM10_quality").select2("val");
	PM10_valueval = $("#PM10_value").select2("val");
	
    generatedval = $("#generated").select2("val");
	
    finallocation = "/slice/air_quality?" 

    for (x in nameval) {
        finallocation += "&name=" +  nameval[x];
    }
	for (x in air_qualityval) {
        finallocation += "&air_quality=" + air_qualityval[x];
    }
	for (x in Longitudeval) {
        finallocation += "&Longitude=" + Longitudeval[x];
    }
	for (x in Latitudeval) {
        finallocation += "&Latitude=" + Latitudeval[x];
    }
	
	for (x in O3_Hourval) {
        finallocation += "&O3_Hour=" + O3_Hourval[x];
    }
	for (x in O3_qualityval) {
        finallocation += "&O3_quality=" + O3_qualityval[x];
    }
	for (x in O3_valueval) {
        finallocation += "&O3_value=" + O3_valueval[x];
    }
	
	for (x in NO2_Hourval) {
        finallocation += "&NO2_Hour=" + NO2_Hourval[x];
    }
	for (x in NO2_qualityval) {
        finallocation += "&NO2_quality=" + NO2_qualityval[x];
    }
	for (x in NO2_valueval) {
        finallocation += "&NO2_value=" + NO2_valueval[x];
    }
	for (x in PM10_Hourval) {
        finallocation += "&PM10_Hour=" + PM10_Hourval[x];
    }
	for (x in PM10_qualityval) {
        finallocation += "&PM10_quality=" + PM10_qualityval[x];
    }
	for (x in PM10_valueval) {
        finallocation += "&PM10_value=" + PM10_valueval[x];
    }
    for (x in generatedval) {
        finallocation += "&generated=" + generatedval[x];
    }
	
    window.location.replace(finallocation);
}

function bus_stops() {
	codeval = $("#code").select2("val");
	transportval = $("#transport").select2("val");
	Longitudeval = $("#Longitude").select2("val");
	Latitudeval = $("#Latitude").select2("val");
    bus_stopval = $("#bus_stop").select2("val");
	distval = $("#district_name").select2("val");
    neigval = $("#neighborhood_name").select2("val");
	
    finallocation = "/slice/bus_stops?" 

    for (x in codeval) {
        finallocation += "&code=" + codeval[x];
    }
	for (x in transportval) {
        finallocation += "&transport=" + transportval[x];
    }
	for (x in Longitudeval) {
        finallocation += "&Longitude=" + Longitudeval[x];
    }
	for (x in Latitudeval) {
        finallocation += "&Latitude=" + Latitudeval[x];
    }
	for (x in bus_stopval) {
        finallocation += "&bus_stop=" + bus_stopval[x];
    }
	for (x in distval) {
        finallocation += "&district_name=" + distval[x];
    }
    for (x in neigval) {
        finallocation += "&neighborhood_name=" + neigval[x];
    }

	
    window.location.replace(finallocation);
}