function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	context.fillStyle = "red";
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.fillRect(0,0,100,100);
	context.strokeRect(0,0,100,100);
	context.clearRect(10,10,10,10);
}

function draw_arc(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	var n=0;
	for(var i = 0;i<10;i++){
		//context.beginPath();
		context.arc(i*20,i*20,i*10,0,Math.PI*2,true);
		//context.closePath();
		context.fillStyle = 'rgba(255,0,0,0.25)';
		context.fill();
	}
}
function draw_line(id){        //绘制直线
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#AEEEEF";
	context.fillRect(0,0,400,300);
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 120;
	context.beginPath();
	context.fillStyle = 'rgb(200,255,100)';
	context.strokeStyle = 'rgb(0,0,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI /15*11;
	for(var i=0; i<30; i++){
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		//context.moveTo(0,10);
		context.lineTo(dx+x*s,dy+y*s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}
function draw_cap(id){ //设置直线的属性
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEEF";
	context.beginPath();
	context.lineWidth = 3;
	context.setLineDash([5,10,15,20]);
	context.lineCap = "round";
	context.lineJoin = "round";
	context.moveTo(20,20);
	context.lineTo(200,20);
	//context.lineTo(180,100);
	context.stroke();
	context.closePath();
}
function draw_art(id){   //绘制曲线
	var canvas = document.getElementById(id);
	if (canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.beginPath();
	context.moveTo(150,20);
	context.arcTo(150,100,50,20,30);
	context.stroke();
}

function draw_ellipse(id){   //绘制圆形
	var canvas = document.getElementById(id);
	if(canvas ==null ){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEEF";
	context.fillRect(0,0,400,300);
	var n = 0;
	for (var i=0; i<10;i++){
		var path = new Path2D();
		path.arc(i*25,i*25,i*10,0,Math.PI*2,true);
		path.closePath();
		context.fillStyle = 'rgba(255,0,0,0.25)';
		context.fill(path);
	}
}



