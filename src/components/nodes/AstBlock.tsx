import { Block } from "ts-morph";
import renderNode from "./AstRender";

export default function AstBlock({node}: {node:Block}) {
    return <div className="Block">
        {node.getChildren().map((node, i) => <span key={i}>{renderNode(node)}</span>)}
    </div>
}