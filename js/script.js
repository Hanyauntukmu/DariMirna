function clocks(){
		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var s = new Date().getSeconds();
		if(h>0 && h<=10){
			$('#text').html('');
			$('#text').append('Pagi');
		}
		if(h>10 && h<=14){
			$('#text').html('');
			$('#text').append('Siang');
		}if(h>14 && h<=18){
			$('#text').html('');
			$('#text').append('Sore');
		}if(h>19 && h<=24){
			$('#text').html('');
			$('#text').append('Malam');
		}
		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;
		$('#hour').html(h);
		$('#minute').html(m);
		$('#second').html(s);

	};
	$(document).ready(function(){
	 setInterval(clocks, 1000);
	});


