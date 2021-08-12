Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach(  '#camera' );

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src='+data_uri+'"/>"'

}) ;
}
 console.log('ml5 version', ml5.verson);
 classifier=ml5.imgeClassifier('https://teachablemachine.withgogle.com/modles/v-sl95BzE/model.json',modelLodaded);