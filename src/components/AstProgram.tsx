import { useMemo } from "react";
import { Project, SourceFile } from "ts-morph";
import AstSource from "./AstSource";

interface AstProgramProps {
    code: string
}
function AstProgram({code}: AstProgramProps) {

    const sources:SourceFile[] = useMemo(() => {
        const proj = new Project({ useInMemoryFileSystem: true, });
        proj.createSourceFile("untitled.ts", code);
        return proj.getSourceFiles();
    }, [code]);

    return <>
        <ul>
            {sources.map(source => <AstSource key={source.getBaseNameWithoutExtension()} source={source} />)}
        </ul>
    </>
}

export default AstProgram;