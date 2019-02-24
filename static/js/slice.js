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