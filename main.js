 img="";
 Status="";
 
 function draw() {
 image(img , 0 , 0 , 640 , 420);
fill('#f71302');
text("Dog" , 45 , 75);
noFill();
stroke("#f71302");
rect(30 , 60 , 450 , 350);
fill('#f71302');
text("Cat" , 320 , 120);
noFill();
stroke("#f71302");
rect(300 , 90 , 270 , 320);
 }
 function preload() {
    img = loadImage('dog_cat.jpg');
 }

 function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "status : Detecting objects";
 }

 function modelLoaded() {
console.log("Model loaded");
Status= true;
objectDetector.detect(img , gotResult);
 }

 function gotResult(error , results) {
   if(error) {
      console.log(error);
   }
   else {
      console.log(results);
   }

 }