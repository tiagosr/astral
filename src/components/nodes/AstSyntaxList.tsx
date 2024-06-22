import { SyntaxList } from "ts-morph";
import AstNode from "../AstNode";

interface AstSyntaxListProp {
    node:SyntaxList
}

function AstSyntaxList({node}:AstSyntaxListProp) {
    return <div>{node.getChildren().map(node => <AstNode node={node} setNode={(node) => console.log(node)} />)}</div>
}

export default AstSyntaxList;