import { SyntaxKind, VariableStatement } from "ts-morph"
import renderNode from "./AstRender";

function AstVariableStatement({node}:{node:VariableStatement}) {

    return <div>
        {node.getChildren().map(
            node => node.isKind(SyntaxKind.VariableDeclarationList) ?
                node.getChildren().map(renderNode) : 
                renderNode(node))}
    </div>
}

export default AstVariableStatement;