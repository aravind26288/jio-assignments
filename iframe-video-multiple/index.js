var videoURL = 'https://www.youtube.com/embed/0eWrpsCLMJQ?playlist=0eWrpsCLMJQ,qSRrxpdMpVc,1ukSR1GRtMU';
document.getElementById('playVideo').addEventListener('click', playVideo);
/*** 
function to play multiple videos using iframe
***/
function playVideo(e){
    document.getElementById('video').src =videoURL+'&autoplay=1';
    e.preventDefault();
}