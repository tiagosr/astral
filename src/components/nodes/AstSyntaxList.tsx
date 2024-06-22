import { SyntaxList } from "ts-morph";
import renderNode from "./AstRender";

function AstSyntaxList({node}: {node:SyntaxList}) {
    return <ul className="SyntaxList">{node.getChildren().map((node, index) => <li key={index}>{renderNode(node)}</li>)}</ul>
}

export default AstSyntaxList;