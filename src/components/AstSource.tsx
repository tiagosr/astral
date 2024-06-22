import { SourceFile } from "ts-morph"
import AstNode from "./AstNode";

interface AstSourceProps {
    source: SourceFile
}

function AstSource({source}: AstSourceProps) {

    return <div className="AstSource">
        {source.getChildren().map(node => <AstNode node={node} setNode={(node) => console.log(node)} />)}
    </div>

}

export default AstSource;