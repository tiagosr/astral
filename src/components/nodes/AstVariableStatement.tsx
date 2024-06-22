import { Node, SyntaxKind, VariableDeclaration, VariableStatement } from "ts-morph"
import AstNode from "../AstNode";

interface AstVariableDeclarationProps {
    node: VariableDeclaration
}

function AstVariableDeclaration({node}:AstVariableDeclarationProps) {
    return <div>
        <ul>
            {node.getChildren().map(node => <li>{node.getText()} - {node.getKindName()}</li>)}
        </ul>
        {node.getText()} - {node.getKindName()}
    </div>
}

function AstConstKeyword() {
    return <div>const</div>
}

interface AstVariableStatementProps {
    node: VariableStatement
}
function AstVariableStatement({node}:AstVariableStatementProps) {

    const renderNode = (node:Node) => {
        switch (node.getKind()) {
            case SyntaxKind.VariableDeclaration: return <AstVariableDeclaration node={node as VariableDeclaration} />
            case SyntaxKind.ConstKeyword: return <AstConstKeyword />
            case SyntaxKind.SyntaxList: return node.getChildren().map(renderNode)
            default: return <AstNode node={node} />
        }
    }

    return <div>
        {node.getChildren().map(node => node.isKind(SyntaxKind.VariableDeclarationList) ?
         node.getChildren().map(renderNode) : 
         renderNode(node))}
    </div>
}

export default AstVariableStatement;