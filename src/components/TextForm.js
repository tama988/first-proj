import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  var bool = true;

  const convertToUP = () => {
    if (bool) {
      setText(text.toUpperCase());
      bool = false;
    } else {
      setText(text.toLowerCase());
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const handleFormat = () => {
    var formatted = text.toLowerCase().split(". ");

    for (var i = 0; i < formatted.length; i++) {
      formatted[i] =
        formatted[i].charAt(0).toUpperCase() + formatted[i].substring(1);
    }

    setText(formatted.join(". "));
  };

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleChange}
          value={text}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={convertToUP}>
        Toggle Case
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleFormat}>
        Format Text
      </button>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "black",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
