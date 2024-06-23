import { ArrowFunction } from "ts-morph";
import renderNode from "./AstRender";

export default function AstArrowFunction({node}: {node:ArrowFunction}) {
    return <span className="ArrowFunction">
        {node.getChildren().map((node, i) => <span key={i}>{renderNode(node)}</span>)}
    </span>
}