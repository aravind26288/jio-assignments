window.addEventListener('message', function(e){
    if(e.data.messageType ==  'play'){
        document.getElementById('videoContainer').load();
        document.getElementById('videoContainer').innerHTML = '<source src="videos/'+e.data.videoSrc+'" type="video/mp4">'+
    'Your browser does not support the video tag.';
    var video = document.getElementById('videoContainer');
    video.play();
    }
    else if(e.data.messageType == 'stop'){
        console.log(e.data);
        var vid = document.getElementById('videoContainer');
    vid.load();
    }
})

document.getElementById('videoContainer').onended = function(){
    console.log('on end');
    window.parent.postMessage({messageType: 'next'}, '*');
}