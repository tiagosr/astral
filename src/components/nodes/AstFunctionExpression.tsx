import { FunctionExpression } from "ts-morph";
import renderNode from "./AstRender";

export default function AstFunctionExpression({node}: {node:FunctionExpression}) {
    return <div className="FunctionExpression">
        {node.getChildren().map((node, i) => <span key={i}>{renderNode(node)}</span>)}
    </div>
}
