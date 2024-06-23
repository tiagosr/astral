import { StringLiteral } from "ts-morph";

export default function AstStringLiteral({node}:{node:StringLiteral}) {
    return <span className="StringLiteral">{node.getText()}</span>
}
