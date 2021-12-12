var tImg = ['blackHeart.png','blueHeart.png'];

var vImg = true;
function fSetImg1(){
	
if (vImg){
	document.getElementById('blackHeart1').src = tImg[1];
	vImg = false;
}
else{
	document.getElementById('blackHeart1').src = tImg[0];
	vImg = true;
}
}
var TImg = ['blackHeart.png','blueHeart.png'];
var VImg = true;

function fSetImg2(){
	
if (VImg){
	document.getElementById('blackHeart3').src = TImg[1];
	VImg = false;
}
else{
	document.getElementById('blackHeart3').src = TImg[0];
	VImg = true;
}
}



var MImg = ['blackHeart.png','blueHeart.png'];
var KImg = true;

function fSetImg3(){
	
if (KImg){
	document.getElementById('blackHeart4').src = MImg[1];
	KImg = false;
}
else{
	document.getElementById('blackHeart4').src = MImg[0];
	KImg = true;
}
}