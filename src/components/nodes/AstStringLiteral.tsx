import { StringLiteral } from "ts-morph";

export default function AstStringLiteral({node}:{node:StringLiteral}) {
    return <div className="StringLiteral">{node.getText()}</div>
}
