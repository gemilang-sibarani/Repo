// Membuat AudioContext untuk memproses audio
var audioCtx = new AudioContext();

// Ambil elemen video dari halaman
var source = audioCtx.createMediaElementSource(document.getElementsByClassName('video-stream html5-main-video')[0]);

// Buat node pengatur volume (gain node)
var gainNode = audioCtx.createGain();

// Tingkatkan volume 4 kali lipat
gainNode.gain.value = 4;

// Hubungkan video ke gain node (pengatur volume)
source.connect(gainNode);

// Hubungkan gain node ke output (speaker)
gainNode.connect(audioCtx.destination);
