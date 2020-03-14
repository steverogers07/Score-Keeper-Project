window.setTimeout(function(){
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var p1Display=document.querySelector("#p1Display");
	var p2Display=document.querySelector("#p2Display");
	var resetButton=document.getElementById("Reset");
	var input=document.querySelector("input[type='number']");
	var score1=0;
	var score2=0;
	var max=5;
	var p=document.querySelector("p");
	p1.addEventListener("click",function(){
        if(score1<max&&score2<max)
        {
        	score1++;
        	p1Display.textContent=score1;
        	if(score1===max)
        		p1Display.classList.add("winner");
        }	
	});
	p2.addEventListener("click",function(){
        if(score2<max&&score1<max)
        {
        	score2++;
        	p2Display.textContent=score2;
        	if(score2===max)
        		p2Display.classList.add("winner");
        }
	});
	resetButton.addEventListener("click",function(){
        reset();
	});
	input.addEventListener("change",function(){
		max=Number(this.value);
          p.textContent="Playing to : "+max;
          reset();
	});
	function reset(){
		score1=0;
        score2=0;
        p1Display.textContent=score1;
        p2Display.textContent=score2;
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");
	}
},500);