Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.querySelector('#output');
Webcam.attach(camera);

function snap() {
    Webcam.snap(function (data_uri) {
        document.querySelector('#picture').innerHTML = "<img src='"+data_uri+"'>";
    })
}

console.log('The version of ML5.js is\t'+ml5.version);

let classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6qo37tcRi/model.json', modelLoaded);

function modelLoaded() {
    
}