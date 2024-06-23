import { VariableDeclaration } from "ts-morph";
import renderNode from "./AstRender";

export default function AstVariableDeclaration({ node }: {node:VariableDeclaration}) {
    return <div className="VariableDeclaration">
        {node.getChildren().map((node, index) => <span key={index}>{renderNode(node)}</span>)}
    </div>;
}
