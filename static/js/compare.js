$(document).ready(function() {
    $('.select2-compare').select2({
        placeholder: "Select Tables to compare",
        width: '25%'
    });
});

function compare() {
    tables = $("#compare").select2("val"); 
    finallocation = "/compare?"
    for (x in tables) {
        finallocation += "&table=" + tables[x];
    }
    window.location.replace(finallocation);
}