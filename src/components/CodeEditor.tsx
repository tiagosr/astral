import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
import monaco from "monaco-editor"

function CodeEditor({code, setCode}: {code:string, setCode:(s:string) => void}) {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor|null>(null);
    const handleEditorMount = (editor:monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
    }
    
    return <Editor
     height="30vh"
     defaultLanguage="typescript"
     defaultValue={code}
     onChange={() => {
        if (editorRef.current !== null) setCode(editorRef.current.getValue())
     }} 
     onMount={handleEditorMount}/>
}

export default CodeEditor;