import { ArrayBindingPattern } from "ts-morph";
import renderNode from "./AstRender";

export default function AstArrayBindingPattern({node}:{node:ArrayBindingPattern}) {
    return <div className="ArrayBindingPattern">{
        node.getChildren().map((node, index) => <span key={index}>{renderNode(node)}</span>)
    }</div>;
}
