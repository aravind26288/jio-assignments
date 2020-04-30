var videoSrc = ['video_one.mp4', 'video_two.mp4', 'video_three.mp4'];
var iframeElem = document.getElementById('videoIframe');
var counter = 0;

(function(){
    iframeElem.contentWindow.postMessage({messageType: 'play', videoSrc: videoSrc[counter]}, '*');
})()

document.getElementById('playVideo').addEventListener('click', playIframeVideo);
document.getElementById('stopVideo').addEventListener('click', stopIframeVideo);
window.addEventListener('message', function(e){
    var messageType = e.data.messageType;
    if(messageType == "next"){
        console.log('next ...'+counter);
        if(counter>=videoSrc.length){
            stopIframeVideo();
        }
        else{
        playIframeVideo();
        }
    }
})
function playIframeVideo(){
    console.log(videoSrc[counter]);
    iframeElem.contentWindow.postMessage({messageType: 'play', videoSrc: videoSrc[counter]}, '*');
    counter++;
}
function stopIframeVideo(){
    console.log(videoSrc);
    iframeElem.contentWindow.postMessage({messageType: "stop"}, '*');
    counter = 0;
}
