var column;
var element;

function func(){

	var temp = document.getElementById("tables_dropdown");
	var table = temp.options[temp.selectedIndex].value;

	var temp = document.getElementById(element);
	var column = temp.options[temp.selectedIndex].value;

	var temp = document.getElementById("operator_dropdown");
	var operator = temp.options[temp.selectedIndex].value;

	finallocation = "/agg/"+table+"?column="+column+"&operator="+operator 
    window.location.replace(finallocation);
}

$('#column_dropdown_1').hide()
$('#column_dropdown_2').hide()
$('#column_dropdown_3').hide()
$('#column_dropdown_4').hide()
$('#column_dropdown_5').hide()
$('#column_dropdown_6').hide()
$('#column_dropdown_7').hide()
$('#column_dropdown_8').hide()
$('#column_dropdown_9').hide()
$('.kevin').hide()

$(document).ready(function() {
    $('#tables_dropdown').select2({
        placeholder: "Select Table",
        width: '20%'
    });
});

$(document).ready(function() {
    $('#operator_dropdown').select2({
        placeholder: "Select Table",
        width: '20%'
    });
});

$('#tables_dropdown').change(function(){
	var value = $('#tables_dropdown').val()

	$('.kevin').show()
	$('#column_dropdown_1').hide()
	$('#column_dropdown_2').hide()
	$('#column_dropdown_3').hide()
	$('#column_dropdown_4').hide()
	$('#column_dropdown_5').hide()
	$('#column_dropdown_6').hide()
	$('#column_dropdown_7').hide()
	$('#column_dropdown_8').hide()
	$('#column_dropdown_9').hide()
	
	if(value == 'Births'){
		$('#column_dropdown_1').show()
		element='column_dropdown_1'
		column = $('#column_dropdown_1').val()
	}
	if(value == 'Deaths'){
		$('#column_dropdown_2').show()
		element='column_dropdown_2'
		column = $('#column_dropdown_2').val()
	}
	if(value == 'Accidents'){
		$('#column_dropdown_3').show()
		element='column_dropdown_3'
		column = $('#column_dropdown_3').val()
	}
	if(value == 'Air_Quality'){
		$('#column_dropdown_4').show()
		element='column_dropdown_4'
		column = $('#column_dropdown_4').val()
	}
	if(value == 'Immigrants_by_nationality'){
		$('#column_dropdown_5').show()
		element='column_dropdown_5'
		column = $('#column_dropdown_5').val()
	}
	if(value == 'Immigrants_Emigrants_by_age'){
		$('#column_dropdown_6').show()
		element='column_dropdown_6'
		column = $('#column_dropdown_6').val()
	}
	if(value == 'Immigrants_Emigrants_by_gender'){
		$('#column_dropdown_7').show()
		element='column_dropdown_7'
		column = $('#column_dropdown_7').val()
	}
	if(value == 'Population'){
		$('#column_dropdown_8').show()
		element='column_dropdown_8'
		column = $('#column_dropdown_8').val()
	}
	if(value == 'Unemployment'){
		$('#column_dropdown_9').show()
		element='column_dropdown_9'
		column = $('#column_dropdown_9').val()
	}
});

