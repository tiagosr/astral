import { ReturnStatement } from "ts-morph";
import renderNode from "./AstRender";

export default function AstReturnStatement({node}: {node:ReturnStatement}) {
    return <span className="ReturnStatement">
        {node.getChildren().map((node, i) => <span key={i}>{renderNode(node)}</span>)}
    </span>
}