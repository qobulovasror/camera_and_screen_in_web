const cameraFeed = document.getElementById("cameraFeed");
const screenFeed = document.getElementById("screenFeed");

const switchCamera = document.getElementById("camera");
const switchScreen = document.getElementById("screen");

switchCamera.addEventListener("change", () => {
  if (switchCamera.checked) {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
        },
      })
      .then(function success(stream) {
        cameraFeed.setAttribute("autoplay", "");
        cameraFeed.srcObject = stream;
      });
  } else {
    cameraFeed.srcObject = null;
  }
});

switchScreen.addEventListener("change", () => {
  if (switchScreen.checked) {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((stream) => {
        screenFeed.setAttribute("autoplay", "");
        screenFeed.srcObject = stream;
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  } else {
    screenFeed.srcObject = null;
  }
});

const runCamera = () => {};
