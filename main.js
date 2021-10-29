Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function (live_view) {
        document.getElementById("result").innerHTML = '<img id="result_img" src="' + live_view + '">'

    });
}
console.log('ml5 version ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CTjzw6eUw/model.json', modelloaded);
function modelloaded() {
    console.log('model is loaded');
}
function check() {
    img=document.getElementById("result_img");
    classifier.classify(img,gotresult);
}

function gotresult(error,result) {
    if(error){
        console.error(error);
    }
    else{console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}
