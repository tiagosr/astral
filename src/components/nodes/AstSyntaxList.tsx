import { SyntaxList } from "ts-morph";
import renderNode from "./AstRender";

export default function AstSyntaxList({node}: {node:SyntaxList}) {
    return <div className="SyntaxList">
        {node.getChildren().map((node, index) => <div key={index}>{renderNode(node)}</div>)}
    </div>
}
