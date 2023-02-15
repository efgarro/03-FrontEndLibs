import React, { useState, useCallback } from "react";
import EditorMd from "./EditorMd";
import PreviewerMd from "./PreviewerMd";
import code from "../data/defaultMd";

const Main = () => {
  const [mdText, setMdText] = useState(code);

  const onChange = (value) => {
    setMdText(value);
  };
  // const onChange = useCallback((value, ViewUpdate) => {
  //   setMdText(value);
  // }, []);

  return (
    <main id="container">
      <section className="layout-wrapper layout-flexRow">
        <div className="layout-box">
          <div className="editor">
            <EditorMd mdText={mdText} onChange={onChange} />
          </div>
        </div>
        <div className="layout-box">
          <div className="result">
            <PreviewerMd mdText={mdText} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
