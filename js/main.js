"use strict";
window.onload = function(){
	console.log('window.onload loaded');
};

function shop(num){
	for (var i = 0; i < num; i++){
	document.body.innerHTML += '<figure class="popup" onmouseover="hoverItemShow('+i+')" onmouseout="hoverItemHid('+i+')" style="float:left;padding:0px;margin-left:20px;margin-right:5px;"><img id="tshirt00'+i+'" src="assests/tshirt00'+i+'.png" alt="tshirt00'+i+'"/><span class="popuptext" id="myPopup'+i+'">Item number '+i+' <br/>£24.99<br/><button onclick="addToCart('+i+')">Add to Cart</button></span></figure>';
	}
}

function addToCart(i){
	//var answer;
	if(confirm("Do you wish to add "+i+" to your cart")===true){
		console.log("Add to cart here!");
	}else{
		console.log("Dont add to cart!");
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