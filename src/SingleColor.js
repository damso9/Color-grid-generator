import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, type, weight }) => {
  const [colorValue, setColorValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    let result = rgbToHex(...rgb);
    console.log(...rgb);
    setColorValue(result);
  });

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [showAlert]);

  return (
    <article
      className={`color ${type === "shade" ? "color-light" : ""}`}
      style={{ backgroundColor: `${colorValue}` }}
      onClick={() => {
        navigator.clipboard.writeText(colorValue);
        setShowAlert(true);
      }}
    >
      <p className={`percent-value`}>{weight}%</p>
      <p className={`color-value`}>{colorValue}</p>
      {showAlert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
