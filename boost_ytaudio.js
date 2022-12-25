var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(document.getElementsByClassName('video-stream html5-main-video')[0]);
var gainNode = audioCtx.createGain();
gainNode.gain.value = 6;
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
