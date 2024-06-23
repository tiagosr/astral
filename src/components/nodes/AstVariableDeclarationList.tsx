import { VariableDeclarationList } from "ts-morph";
import renderNode from "./AstRender";

export default function AstVariableDeclarationList({ node }: {node:VariableDeclarationList}) {
    return <div className="VariableDeclarationList">
        {node.getChildren().map((node, index) => <span key={index}>{renderNode(node)}</span>)}
    </div>;
}
