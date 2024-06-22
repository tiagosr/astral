import { Node } from "ts-morph";
import renderNode from "./nodes/AstRender";

interface AstNodeProps {
    node:Node,
    setNode:(node:Node)=>void | undefined
}

function AstNode({node}: AstNodeProps) {
   
    return <div className="AstNode">
        <div>{node.getKindName()}</div>
        {renderNode(node)}
    </div>
}

export default AstNode;