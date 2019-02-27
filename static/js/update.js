$(document).ready(function() {
    $('.select2-update').select2({
        placeholder: "Select Table",
        width: '15%'
    });
});

function changetable() {
    tableval = $(".select2-update").val()
    console.log(tableval)
    if (tableval === "Districts") {
        window.location.href = "/update/districts";
    } else {
        console.log("HELLO")
        window.location.href = "/update/neighborhoods";
    }
}

function update(index) {
    orig = $("#" + index + "-original").text()
    newval = $("#" + index + "-new").val()
    console.log(orig)
    console.log(newval)
    window.location.href = "?new=" + newval + "&orig=" + orig
}