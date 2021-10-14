canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed >=65 && keyPressed<=90)
		alpkey();
		document.getElementById("d1").innerHTML="You pressed an Alphabet key";

		if(keyPressed >=37 && keyPressed<=40)
		arrkey();
		document.getElementById("d1").innerHTML="You pressed an arrow key";

		if(keyPressed >=48 && keyPressed<=57)
		numkey();
		document.getElementById("d1").innerHTML="You pressed an number key";

		if(keyPressed >=91 && keyPressed<=123)
		otherkey();
		document.getElementById("d1").innerHTML="You pressed an other key";
	
}

function alpkey()
{
	img_image="alpkey.png";
	add();

}
function numkey()
{
	img_image="numkey.png";
	add();
}
function arrkey()
{
	img_image="arrkey.png";
	add();
}
function spkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
