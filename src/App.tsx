import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { DEFAUT_CPP_CODE } from "./config/const";


function App() {

  const [code, setCode] = useState<string>(DEFAUT_CPP_CODE);

  return (
    <div className="grid">
      <div className="pl-5 pt-2">
        <Editor
          height="90vh" 
          width="100%"
          defaultLanguage="cpp"
          value={code}
          onChange={(v) => setCode(v || "")}
        />
      </div>
      <div className="execution">
        <hgroup>
          <h2>Code Insight</h2>
          <p>Your execution will show up here!</p>
        </hgroup>
        <button className="outline" onClick={() => {}}>Run</button>
      </div>
    </div>
  );
}

export default App;
