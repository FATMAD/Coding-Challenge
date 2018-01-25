<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
window.onload=function(){
canv=document.getElemntById("gc")
ctx=canv.getContext("2d");
document.addEventListener("keydown",keyPush);
setInterval(game,100/15);
}
px=py=10
gs=tc=20;
ax=ay=15;
xv=yv=0;
function game (){
	px+=xv;
	Py+=Py;
	if(px<0){
		px=tc-1;
	}
	if(px>tc-1){
		px=0;
	}
	if(px<0){
		py=tc-1;
	}
	if(py>tc-1){
		py=0;
	}
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width,canv.height);
	ctx.fillStyle="lime";
	for (var i=0 ; i <trail.lenght; i++) {
		
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);

		if(trail[i].x==px && trail[i].y==py){
			trail = 5;
		}
	}
     trail.push({x:px,y:py});
     while(trail.lenght>trail){
     	trail.shift();
     }

	if (ax==px && ay==py){
		trail++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);

	}
}
functionkeyPush(){
 switch(evt.keyCode){
	case 37:
		xv=0;yv=0
		break;
	case 38:
		xv=0;yv=0
		break;
	case 37:
		xv=0;yv=0
		break;
	case 37:
		xv=0;yv=0
		break;	
	}
}
</script>
