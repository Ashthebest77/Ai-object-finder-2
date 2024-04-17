//WILL BE FILLED IN NEXT CLASS - akshata
status =""
function setup() {
    canvas = createCanvas(480,380);
    canvas.center();   
    video = createCapture(VIDEO);
    video.hide();
}
 function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("objectFinder").value;
}
 function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
 }
 function draw() {
    image(video, 0, 0, 480, 380);
 }