$(document).ready(function(){
var alink = "";
$("#ok").on('click',function(){
	var input = document.getElementById("inputx01").value;
	var alink = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + input + '&format=json';
	$.ajax({
		url: alink,
		dataType: 'jsonp',
		success: function(json) {
			var htmlThings = "";
			for (var i = 0; i < 10; i++) {
				htmlThings +=
					
					'<div class="st">' +
					'<a href="' +json[3][i] +'" target="_blank">' +
					'<div class="blacktext">'+
					'<p><b>'+json[1][i]+'</b></p>'+
					'<p class="bs">' + json[2][i] +'</p>'+
					'</div>'+'</a></div>';
			}
			$("#loka").html(htmlThings);
		},
		cache: false
	});
});
});