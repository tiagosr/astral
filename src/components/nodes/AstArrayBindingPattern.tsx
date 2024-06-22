import { ArrayBindingPattern } from "ts-morph";
import renderNode from "./AstRender";

function AstArrayBindingPattern({node}:{node:ArrayBindingPattern}) {
    return <ul className="ArrayBindingPattern">{
        node.getChildren().map((node, index) => <li key={index}>{renderNode(node)}</li>)
    }</ul>;
}

export default AstArrayBindingPattern;