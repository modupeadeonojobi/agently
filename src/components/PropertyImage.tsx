import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faUpload } from "@fortawesome/free-solid-svg-icons";

import "./PropertyImage.css";

export const PropertyImage = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [imgArray, setImgArray] = useState([]);

  const handleClick = () => {
    if (inputRef !== null) {
      inputRef.current.click();
    }
  };

  const uploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = [];
    const filesArray = [];
    files.push(e.target.files);
    if (files === null) {
      return;
    }
    for (let i = 0; i < files[0].length; i++) {
      filesArray.push(URL.createObjectURL(files[0][i]));
    }
    console.log(filesArray);
    setImgArray(filesArray);
    if (filesArray.length > 0) {
      console.log(imgArray);
    }
  };

  return (
    <>
      <div className="property-image text-center">
        {imgArray.length > 0 ? (
          <div className="d-flex justify-content-between">
            <h6>Add at least 5 photos</h6>
            <p>
              <a role="button" className="text-underline" >
                Upload
                <FontAwesomeIcon icon={faUpload} className="ms-1" />
              </a>
            </p>
          </div>
        ) : null}

        <div className={imgArray.length ? "img-box-no-padding" : "img-box"}>
          <div className="d-flex flex-wrap">
            {(imgArray || []).map((url, index) => (
              <>
                <div key={index} className="me-4">
                  <img src={url} alt="..." className="img-preview" />
                </div>
              </>
            ))}
          </div>
          {imgArray.length < 1 ? (
            <>
              <div>
                <FontAwesomeIcon icon={faImages} className="icon-adjust" />
              </div>
              <h6>Add at least 5 photos</h6>
              <input
                type="file"
                ref={inputRef}
                className="d-none"
                onChange={uploadFiles}
                accept="image/x-png,image/gif,image/jpeg"
                multiple
              />
              <p>
                <a
                  role="button"
                  className="text-underline"
                  onClick={handleClick}
                >
                  Upload from your device
                </a>
              </p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
