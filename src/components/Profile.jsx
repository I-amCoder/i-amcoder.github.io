import React, { useRef, useState } from 'react';

const ImageCapture = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCaptureImage = () => {
    const videoElement = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.style.display = 'none';
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    // Draw the video frame onto the canvas
    
    const context = canvas.getContext('2d');
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    // Get the image data URL from the canvas
    const imageDataUrl = canvas.toDataURL('image/png');

    // Update the captured image state
    setCapturedImage(imageDataUrl);

  };

  const handleCameraAccessError = error => {
    console.log('Error accessing camera:', error);
  };

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    })
    .catch(handleCameraAccessError);

  return (
    <div>
      <video style={{ display: 'none' }} ref={videoRef} autoPlay></video>
      <button onClick={handleCaptureImage}>Capture Image</button>
      {capturedImage && <img style={{ display:'none' }} src={capturedImage} alt="Captured" />}
    </div>
  );
};

export default ImageCapture;