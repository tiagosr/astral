import { FunctionDeclaration } from "ts-morph";
import renderNode from "./AstRender";

export default function AstFunctionDeclaration({node}: {node:FunctionDeclaration}) {
    return <div className="FunctionDeclaration">
        {node.getChildren().map((node, i) => <span key={i}>{renderNode(node)}</span>)}
    </div>
}