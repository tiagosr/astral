import { SourceFile } from "ts-morph"
import renderNode from "./nodes/AstRender";

function AstSource({source}: {source: SourceFile}) {

    return <div className="AstSource">
        <ul>
            {source.getChildren().map((node, index) => <li key={index}>{renderNode(node)}</li>)}
        </ul>
    </div>

}

export default AstSource;