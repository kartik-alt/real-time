function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(20,300);
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('mobileNet' , modelLoaded);
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video ,gotResult)

}
 
function modelLoaded() {

  console.log('model Loaded');
  
}

function gotResult(error, result){

  if(error){
console.error(error);

  }
  else{
    console.log(result);
    document.getElementById("Object").innerHTML = result[0].label;
    document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}


