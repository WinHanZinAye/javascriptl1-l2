var getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	//console.log('i am working');

	//scrolltop
	//project height
	//current height

	//project height - current height

	//scrolltop * 100 / (project height - current height);

	var getscrolltop = document.documentElement.scrollTop;
	//console.log(getscrolltop);

	var getscrollhieght = document.documentElement.scrollHeight;
	//console.log(getscrollhieght);

	var getclientheight = document.documentElement.clientHeight;
	//console.log(getclientheight);

	var calcheight = getscrollhieght - getclientheight;

	//var getfinal = Math.round((getscrollhieght * 100) / calcheight);
	//console.log(getfinal);

	var getfinal = Math.round((getscrolltop / calcheight) *100);
	//console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
}


function printme(){
	window.print();
}