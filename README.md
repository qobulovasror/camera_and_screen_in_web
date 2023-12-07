# Camera and screen in web

## For camera
html
```html
  <video id="cameraFeed" controls></video>
```
Javascript
```js
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
```

## For Screen  
html
```html
  <video id="screenFeed" controls></video>
```
Javascript
```js
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
```
