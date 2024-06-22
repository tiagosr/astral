import { StringLiteral } from "ts-morph";

function AstStringLiteral({node}:{node:StringLiteral}) {
    return <div className="StringLiteral">{node.getText()}</div>
}

export default AstStringLiteral;