var c = 0;
var s = 0;
var m = 0;
var h = 0;
var objTimer;
function startTimer(obj) {
    control = setInterval(timekeeper,10);
    objTimer = obj;
}

function stopTimer() {
    clearInterval(control);
}

function clearVariables() {
     s = 0
     m = 0
     h = 0
     c = 0;
     s = "0"+s;
     m = "0"+m;
     h = "0"+h;
}

function timekeeper () {
	if (c < 99) {
		c++;
		if (c < 10) { c = "0"+c }
	}
	if (c == 99) {
		c = -1;
	}
	if (c == 0) {
		s ++;
		if (s < 10) { s = "0"+s }
	}
	if (s == 59) {
		s = -1;
	}
	if ( (c == 0)&&(s == 0) ) {
		m++;
		if (m < 10) { m = "0"+m }
	}
	if (m == 59) {
		m = -1;
	}
	if ( (c == 0)&&(s == 0)&&(m == 0) ) {
		h ++;
		if (h < 10) { h = "0"+h }
	}
    
    objTimer.text( h +":" + m + ":" + s);
}