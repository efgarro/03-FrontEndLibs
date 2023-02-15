import React, { useState } from "react";
import EditorMd from "./EditorMd";
import PreviewerMd from "./PreviewerMd";
import code from "../data/defaultMd";

const Main = () => {
  const [mdText, setMdText] = useState(code);

  const handleChange = (e) => {
    setMdText(e.target.value);
  };

  return (
    <main id="container">
      <section className="layout-wrapper layout-flexRow">
        <div className="layout-box">
          <div className="editor">
            <EditorMd mdText={mdText} handleChange={handleChange} />
          </div>
        </div>
        <div className="layout-box">
          <div /* id="preview" */ className="result">
            <PreviewerMd mdText={mdText} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
