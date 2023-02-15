import React from "react";

export default function EditorMd({ mdText, handleChange }) {
  return (
    <textarea
      id="editor"
      className="editor--textarea"
      onChange={handleChange}
      type="text"
      defaultValue={mdText}
    />
  );
}
