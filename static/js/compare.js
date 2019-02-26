
$(document).ready(function() {
    $('.select2-compare').select2({
        placeholder: "Select Tables to compare",
        width: '25%'
    });
});

$(".select2-compare").change(function() {
    var values = $(".select2-compare").val()
    for (i in values) {
        if(values[i] == "Deaths") {
            $(".deaths-drop").show();
        } else if (values[i] == "Births") {
            $(".births-drop").show();
        } else if (values[i] == "Accidents") {
            $(".acc-drop").show();
        } else if (values[i] == "Immigrants") {
            $(".imm-drop").show();
        } else if (values[i] == "Population") {
            $(".pop-drop").show();
        } else if (values[i] == "Unemployment") {
            $(".une-drop").show();
        }
    }
});

$(document).ready(function() {
    $('.select2-deaths-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-deaths-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-deaths-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-deaths-age').select2({
        placeholder: "Select Age(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-births-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-births-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-births-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-births-gender').select2({
        placeholder: "Select Gender(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-acc-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-acc-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-acc-street').select2({
        placeholder: "Select Street(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-imm-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-imm-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-imm-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-imm-nationality').select2({
        placeholder: "Select Nationality",
        width: '15%'
    });
});


$(document).ready(function() {
    $('.select2-pop-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-pop-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-pop-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-pop-gender').select2({
        placeholder: "Select Gender(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-pop-age').select2({
        placeholder: "Select Age(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-une-year').select2({
        placeholder: "Select Year(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-une-district_name').select2({
        placeholder: "Select District(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-une-neighborhood_name').select2({
        placeholder: "Select Neighborhood(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-une-gender').select2({
        placeholder: "Select Gender(s)",
        width: '15%'
    });
});

$(document).ready(function() {
    $('.select2-une-demand_occupation').select2({
        placeholder: "Select Occupation(s)",
        width: '15%'
    });
});

$(".acc-drop").hide()
$(".imm-drop").hide()
$(".deaths-drop").hide()
$(".births-drop").hide()
$(".pop-drop").hide()
$(".une-drop").hide()


function compare() {
    tables = $("#compare").select2("val");
    
    // Deaths
    deaths1 = $(".select2-deaths-year").select2("val");
    deaths2 = $(".select2-deaths-district_name").select2("val");
    deaths3 = $(".select2-deaths-neighborhood_name").select2("val");
    deaths4 = $(".select2-deaths-age").select2("val");
    
    // Births
    births1 = $(".select2-deaths-year").select2("val");
    births2 = $(".select2-deaths-district_name").select2("val");
    births3 = $(".select2-deaths-age").select2("val");
    births4 = $(".select2-deaths-neighborhood_name").select2("val");

    // Accidents
    acc1 = $(".select2-acc-street").select2("val");
    acc2 = $(".select2-acc-district_name").select2("val");
    acc3 = $(".select2-acc-neighborhood_name").select2("val");

    // Population
    pop1 = $('.select2-pop-year').select2("val");
    pop2 = $('.select2-pop-district_name').select2("val");
    pop3 = $('.select2-pop-neighborhood_name').select2("val");
    pop4 = $('.select2-pop-gender').select2("val");
    pop5 = $('.select2-pop-age').select2("val");

    // Unemployment
    une1 = $('.select2-une-year').select2("val");
    une2 = $('.select2-une-district_name').select2("val");
    une3 = $('.select2-une-neighborhood_name').select2("val");
    une4 = $('.select2-une-gender').select2("val");
    une5 = $('.select2-une-demand_occupation').select2("val");

    // Immigrants
    imm1 = $('.select2-imm-year').select2("val");
    imm2 = $('.select2-imm-district_name').select2("val");
    imm3 = $('.select2-imm-neighborhood_name').select2("val");
    imm4 = $('.select2-imm-nationality').select2("val");

    finallocation = "/compare?"
    for (x in tables) {
        finallocation += "&table=" + tables[x];
    }

    // Deaths
    for (x in deaths1) {
        finallocation += "&deaths1=" + deaths1[x];
    }
    for (x in deaths2) {
        finallocation += "&deaths2=" + deaths2[x];
    }
    for (x in deaths3) {
        finallocation += "&deaths3=" + deaths3[x];
    }
    for (x in deaths4) {
        finallocation += "&deaths4=" + deaths4[x];
    }

    //Births
    for (x in births1) {
        finallocation += "&births1=" + births1[x];
    }
    for (x in births2) {
        finallocation += "&births2=" + births2[x];
    }
    for (x in births3) {
        finallocation += "&births3=" + births3[x];
    }
    for (x in births4) {
        finallocation += "&births4=" + births4[x];
    }

    //Accidents
    for (x in acc1) {
        finallocation += "&acc1=" + acc1[x];
    }
    for (x in acc2) {
        finallocation += "&acc2=" + acc2[x];
    }
    for (x in acc3) {
        finallocation += "&acc3=" + acc3[x];
    }

    // Immigration
    for (x in imm1) {
        finallocation += "&imm1=" + imm1[x];
    }
    for (x in imm2) {
        finallocation += "&imm2=" + imm2[x];
    }
    for (x in imm3) {
        finallocation += "&imm3=" + imm3[x];
    }
    for (x in imm4) {
        finallocation += "&imm4=" + imm4[x];
    }

    // Population
    for(x in pop1) {
        finallocation += "&pop1=" + pop1[x];
    }
    for(x in pop2) {
        finallocation += "&pop2=" + pop2[x];
    }
    for(x in pop3) {
        finallocation += "&pop3=" + pop3[x];
    }
    for(x in pop4) {
        finallocation += "&pop4=" + pop4[x];
    }
    for(x in pop5) {
        finallocation += "&pop5=" + pop5[x];
    }

    // Unemployment
    for(x in une1) {
        finallocation += "&une1=" + une1[x];
    }
    for(x in une2) {
        finallocation += "&une2=" + une2[x];
    }
    for(x in une3) {
        finallocation += "&une3=" + une3[x];
    }
    for(x in une4) {
        finallocation += "&une4=" + une4[x];
    }
    for(x in une5) {
        finallocation += "&une5=" + une5[x];
    }

    window.location.replace(finallocation);
}