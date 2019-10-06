console.log("Hola soy una web app y me llamo pasticheme");

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const errorMsg = document.getElementById("errorMsg");


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream)
      video.src = window.URL.createObjectURL(localMediaStream)
      video.play();
    })
}

getVideo()






// -------------------------------------------------------------------
// Magenta stuff
// const model = new mi.ArbitraryStyleTransferNetwork();
// const contentImg = document.getElementById(
//   "content"
// );
// const styleImg = document.getElementById(
//   "style"
// );
// const stylizedCanvas = document.getElementById(
//   "stylized"
// );

// function stylize() {
//   model
//     .stylize(contentImg, styleImg)
//     .then(imageData => {
//       stylizedCanvas
//         .getContext("2d")
//         .putImageData(imageData, 0, 0);
//     });
// }

// model.initialize().then(stylize);
