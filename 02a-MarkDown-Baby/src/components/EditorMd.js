import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";

// const code = `## Title

// \`\`\`jsx
// function Demo() {
//   return <div>demo</div>
// }
// \`\`\`

// \`\`\`bash
// # Not dependent on uiw.
// npm install @codemirror/lang-markdown --save
// npm install @codemirror/language-data --save
// \`\`\`

// [weisit ulr](https://uiwjs.github.io/react-codemirror/)

// \`\`\`go
// package main
// import "fmt"
// func main() {
//   fmt.Println("Hello, 世界")
// }
// \`\`\`
// `;

export default function EditorMd({ mdText, onChange }) {
  // const onChange = React.useCallback((value, ViewUpdate) => {
  //   console.log(value);
  // }, []);

  return (
    <CodeMirror
      value={mdText}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      width="600px"
      theme={dracula}
      lineWrapping={true}
      onChange={onChange}
    />
  );
}
