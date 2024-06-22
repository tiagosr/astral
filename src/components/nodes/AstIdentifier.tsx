import { Identifier } from "ts-morph";

function AstIdentifier({node}:{node:Identifier}) {
    return <div className="Identifier">{node.getText()}</div>
}

export default AstIdentifier;