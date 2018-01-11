"use strict";
window.onload = function(){
	console.log('window.onload loaded');
};

function shop(num){
	var div = document.getElementById('tshirtDiv');
	for (var i = 1; i <= num; i++){
	div.innerHTML += '<figure class="popup" onmouseover="hoverItemShow('+i+')" onmouseout="hoverItemHid('+i+')" style="float:left;padding:0px;margin-left:5px;margin-right:5px;"><img style="width: 214px; height: 236px;" id="tshirt'+i+'" src="assests/Shop/Tshirts/tshirt'+i+'.jpeg" alt="tshirt'+i+'"/><span class="popuptext" id="myPopup'+i+'">Tshirt number '+i+' <br/>£12.99<br/><button onclick="addToCart('+i+')">Buy Now!</button></span></figure>';
	}
}

function addToCart(i){
	//var answer;
	if(confirm("Do you wish to buy tshirt number "+i+"!")===true){
	}else{
	}
}

function hoverItemShow(i){
	var hover = document.getElementById("myPopup"+i);
	if(hover.classList.toggle("show") === false){
		hover.classList.toggle("show");
	}	
}

function hoverItemHid(i){
	var hover = document.getElementById("myPopup"+i);
	if(hover.classList.toggle("show") === true){
		hover.classList.toggle("show");
	}
}

function squadDisplay(sourceFile , char){
	console.log("This is display");
	console.log(sourceFile);
	var squad = localStorage.getItem("squad");
	var slot1 = squad.slice(0,7);
	console.log(slot1);
	var slot2 = squad.slice(8,14);
	console.log(slot2);
	var slot3 = squad.slice(15,21);
	console.log(slot3);
	var slot4 = squad.slice(22,28);
	console.log(slot4);
	if(slot1 === "char000"){
		document.getElementById('slot1').src = sourceFile;
		squad = ""+char+"/"+slot2+"/"+slot3+"/"+slot4+"";
		localStorage.setItem("squad",squad);
	}else if(slot2 === "char000"){
		document.getElementById('slot2').src = sourceFile;
		squad = ""+slot1+"/"+char+"/"+slot3+"/"+slot4+"";
		localStorage.setItem("squad",squad);
	}else if(slot3 === "char000"){
		document.getElementById('slot3').src = sourceFile;
		squad = ""+slot1+"/"+slot2+"/"+char+"/"+slot4+"";
		localStorage.setItem("squad",squad);
	}else if(slot4 === "char000"){
		document.getElementById('slot4').src = sourceFile;
		squad = ""+slot1+"/"+slot2+"/"+slot3+"/"+char+"";
		localStorage.setItem("squad",squad);
	}else{
		alert();
	}
	
}

function squadStart(){
	if(localStorage.getItem("squad") === null || localStorage.getItem("squad") === "char000/char000/char000/char000"){
		var basic = "char000/char000/char000/char000";
		console.log(basic);
		localStorage.setItem("squad",basic);
	}else{
		var squad = localStorage.getItem("squad");
		var slot1 = squad.slice(0,7);
		var slot2 = squad.slice(8,14);
		var slot3 = squad.slice(15,21);
		var slot4 = squad.slice(22,28);
		console.log("local");
		document.getElementById('slot1').src = document.getElementById(slot1).src;
		document.getElementById('slot2').src = document.getElementById(slot2).src;
		document.getElementById('slot3').src = document.getElementById(slot3).src;
		document.getElementById('slot4').src = document.getElementById(slot4).src;
	}
}