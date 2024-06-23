import { SyntaxKind, VariableStatement } from "ts-morph"
import renderNode from "./AstRender";

export default function AstVariableStatement({node}:{node:VariableStatement}) {

    return <div className="VariableStatement">
        {node.getChildren().map(
            node => node.isKind(SyntaxKind.VariableDeclarationList) ?
                node.getChildren().map(renderNode) : 
                renderNode(node))}
    </div>
}
