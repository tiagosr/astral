import { Identifier } from "ts-morph";

export default function AstIdentifier({node}:{node:Identifier}) {
    return <span className="Identifier">{node.getText()}</span>
}

