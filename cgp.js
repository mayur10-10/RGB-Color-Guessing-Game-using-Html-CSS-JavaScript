var numsquare=6;
var colors=generateRandomColor(numsquare);

var pc=pickColor();
var picked=document.querySelector("#displaycolor");
var sq= document.querySelectorAll(".square");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numsquare=3;
	colors=generateRandomColor(numsquare);
	pc=pickColor();
	picked.textContent=pc;
	for (var i = 0; i < sq.length; i++) {
		if (colors[i]) {
	 		sq[i].style.backgroundColor=colors[i];
	 	}
	 	else{
	 		sq[i].style.display="none";
	 	}
	 } 
	 reset.textContent="New game";
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numsquare=6;
	colors=generateRandomColor(numsquare);
	pc=pickColor();
	picked.textContent=pc;
	for (var i = 0; i < sq.length; i++) {
	 		sq[i].style.backgroundColor=colors[i];
	 		sq[i].style.display="block";
	 }
	 reset.textContent="New game"; 
});

reset.addEventListener("click",function(){
	colors=generateRandomColor(numsquare);
	pc=pickColor();
	picked.textContent=pc;
	for (var i = 0; i <sq.length; i++) {
	sq[i]. style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Game";
	msg.textContent="";
	}
});


picked.textContent=pc;

for (var i = 0; i <sq.length; i++) {
	sq[i]. style.backgroundColor=colors[i];

	sq[i].addEventListener("click",function(){
		var cc=this.style.backgroundColor;
		if (cc===pc) {
			msg.textContent="Correct!";
			reset.textContent="Play again?"
			changecolor(cc);
			h1.style.backgroundColor=cc;
		}
		else
		{
			this.style.backgroundColor="#232323";
			msg.textContent=" Oops! Try again";
		}
	}); 
}

function changecolor(color) {
	for (var i = 0; i < sq.length; i++) {
		sq[i].style.backgroundColor=color;
	}
}

function pickColor() {
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
	 arr.push(randomcol());
	}
	return arr;
}

function randomcol(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}