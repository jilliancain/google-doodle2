// Store 3 images
var img0 = '../img/backgroundcookie-01.png';
var img1 = '../img/backgroundcookie2.png';
var img2 = '../img/backgroundcookie3.png';

// Get random number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomized images
$('#random').attr( 'src', eval('img' + numRand) );



// draw svg

var mySVG = $('#title').drawsvg();

mySVG.drawsvg('animate');