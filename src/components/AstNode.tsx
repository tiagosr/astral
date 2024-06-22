import { Node, SyntaxKind, SyntaxList, VariableStatement } from "ts-morph";
import AstSyntaxList from "./nodes/AstSyntaxList";
import AstVariableStatement from "./nodes/AstVariableStatement";

interface AstNodeProps {
    node:Node,
    setNode:(node:Node)=>void
}

function AstNode({node}: AstNodeProps) {
    
    const renderNode = (node:Node) => {
        switch (node.getKind()) {
            case SyntaxKind.SyntaxList:
                return <AstSyntaxList node={node as SyntaxList} />;
            case SyntaxKind.ConstKeyword:
                return <div>const</div>;
            case SyntaxKind.VariableStatement:
                return <AstVariableStatement node={node as VariableStatement} />
            default:
                return <ul>
                    <li>{node.getKindName()}</li>
                    <li>{node.getText()}</li>
                </ul>
        }
    }
    
    return <div className="AstNode">
        <div>{node.getKindName()}</div>
        {renderNode(node)}
    </div>
}

export default AstNode;