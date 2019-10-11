console.log("Hola soy una web app y me llamo pasticheme");
const video = document.querySelector(
  ".player"
);
const canvas = document.querySelector(
  ".photo"
);
// const ctx = canvas.getContext("2d");
const strip = document.querySelector(
  ".strip"
);
const snap = document.querySelector(
  ".snap"
);

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false
    })
    .then(localMediaStream => {
      // console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.src = window.URL.createObjectURL(
        localMediaStream
      );
      video.play();
    })
    .catch(err => {
      console.error("oh no", err);
    });
}



// function paintToCanvas() {
//   const width = video.videoWidth;
//   const height = video.videoHeight;
//   // console.log(width, height);
//   canvas.width = width;
//   canvas.height = height;

//   return setInterval(() => {
//     ctx.drawImage(
//       video,
//       0,
//       0,
//       width,
//       height
//     );
//     let pixels = ctx.getImageData(
//       0,
//       0,
//       width,
//       height
//     );
//     // pixels = redEffect(pixels);
//     pixels = rgbSplit(pixels);
//     // console.log(pixels);
//     // debugger;
//     ctx.putImageData(pixels, 0, 0);
//     ctx.globalAlpha = 0.7;
//     // console.log(ctx);
//     // debugger;
//   }, 16);
// }

function takePhoto() {
  //play the sound
  snap.currentTime = 0;
  snap.play();
  //take the data out of the canvas
  const data = canvas.toDataURL(
    "image/jpeg"
  );
  const link = document.createElement(
    "a"
  );
  link.href = data;
  link.setAttribute(
    "download",
    "handsome"
  );
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(
    link,
    strip.firstChild
  );
  // console.log(data);
}

function rgbSplit(pixels) {
  for (
    let i = 0;
    i < pixels.data.length;
    i += 4
  ) {
    pixels.data[i - 150] =
      pixels.data[i + 0];
    pixels.data[i + 500] =
      pixels.data[i + 1];
    pixels.data[i - 550] =
      pixels.data[i + 2];
  }
  return pixels;
}

getVideo();


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
