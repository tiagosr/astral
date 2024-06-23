import { VariableDeclaration } from "ts-morph";
import renderNode from "./AstRender";

export default function AstVariableDeclaration({ node }: {node:VariableDeclaration}) {
    return <ul className="VariableDeclaration">
        {node.getChildren().map((node, index) => <li key={index}>{renderNode(node)}</li>)}
    </ul>;
}
