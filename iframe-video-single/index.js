var videoURL = 'https://www.youtube.com/embed/0eWrpsCLMJQ';
document.getElementById('playVideo').addEventListener('click', playVideo);
/*** 
function to play single video using iframe
***/
function playVideo(e){
    document.getElementById('video').src =videoURL+'?autoplay=1';
    e.preventDefault();
}