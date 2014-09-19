
days = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ];
daysabbrs = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ];
months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
monthabbrs = [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ];
daysinmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
current_date = new Date();

function Calendar(month, year) {
  this.month = (isNaN(month) || month == null) ? current_date.getMonth() + : month;
  this.year  = (isNaN(year) || year == null) ? current_date.getFullYear() : year;
  this.html = '';
} 

Calendar.prototype.generateHTML = function(){
	var firstDay = new Date(this.year, this.month, 1);
	var startingDay = firstDay.getDay();
	var monthLength = daysinmonth[this.month];

	if (this.month == 1) { // February only!
	  if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
	    monthLength = 29;
	  }
	}
	var monthName = monthabbrs[this.month];
	var html = '<div class="row"><div class="text-center"><h3>'+ monthName + "&nbsp;" + this.year +'</h3></div></div>';
	html += '<table class="table table-striped table-bordered">';
	for (var i = 0; i <= 6; i++ ){
	  html += '<th class="bg-primary text-center">';
	  html += daysabbrs[i];
	  html += '</th>';
	}
	html += '<tr height="70">';	
  // fill in the days
  var day = 1;
  // this loop is for is weeks (rows)
  for (var i = 0; i < 9; i++) {
    // this loop is for weekdays (cells)
    for (var j = 0; j <= 6; j++) { 
      html += '<td class="calendar-day">';
      if (day <= monthLength && (i > 0 || j >= startingDay)) {
        html += day;
        day++;
      }
      html += '</td>';
    }
    // stop making rows if we've run out of days
    if (day > monthLength) {
      break;
    } else {
      html += '</tr><tr height="70">';
    }
  }
  html += '</tr></table>';

  this.html = html;
}



Calendar.prototype.getHTML = function() {
  return this.html;
}
