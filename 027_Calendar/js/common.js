function Calendar2(id, year, month) {
	var monthNumb = new Date().getMonth() + 1;
	var Dlast = new Date(year,month+1,0).getDate(),
	D = new Date(year,month,Dlast),
	DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
	DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
	calendar = '<tr>',
	month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	if (DNfirst != 0) {
		for(var i = 1; i < DNfirst; i++) calendar += '<td class="no-date">';
	} else {
		for(var  i = 0; i < 6; i++) calendar += '<td class="no-date">';
	}

var checkedDate = ['2018-9-24', '2018-9-26', '2018-11-28'];
function showArray() {
	checkedDate.sort();

	document.getElementById("mass").innerHTML = checkedDate.join(", ");
}
showArray();

for(var  i = 1; i <= Dlast; i++) {
	if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
		calendar += '<td class="today" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + '<a href="#form-popup" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'" class="popup">' + i + '</a>';
	}
	else if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0 || new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6) {
		calendar += '<td class="output" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + i;
	}
	else if (new Date(D.getFullYear(),D.getMonth(),i) < new Date()) {
		calendar += '<td class="output" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + i;
	}
	else if (new Date(D.getFullYear(),D.getMonth(),i) > new Date() && checkedDate.includes(D.getFullYear()+'-'+(D.getMonth()+1)+'-'+i)) {
		calendar += '<td class="disabled-days output" disabled-day="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'"  data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + i;
	}
	else{
		calendar += '<td data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + '<a href="#form-popup" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'" class="popup">' + i + '</a>';
	}



	if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
		calendar += '<tr>';
	}
	
}

for(var  i = DNlast; i < 7; i++) calendar += '<td class="last-dates1">&nbsp;';
	document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
		if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
			document.querySelector('#'+id+' tbody').innerHTML += '<tr><td class="last-dates">&nbsp;<td class="last-dates">&nbsp;<td class="last-dates">&nbsp;<td class="last-dates">&nbsp;<td class="last-dates">&nbsp;<td class="last-dates">&nbsp;<td class="last-dates">&nbsp;';
	}
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
	Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
	goMonth();
}
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
	Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
	goMonth();
}



function goMonth() {
	$('#calendar2 tbody td').each(function( index ){

		$(this).click(function(){

			$(this).attr("data-current");
			var datesQ = $(this).attr("data-current");
			$('#data-now').html(datesQ);

			$('.select2').addClass('rrr' + datesQ);

		});

	});
	$(".popup").magnificPopup({
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
		overflowY: 'scroll'
	});
}
goMonth();

$(document).ready(function() {
	$('.js-example-basic-single').select2();
});