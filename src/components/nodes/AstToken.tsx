import { Node } from "ts-morph";

function AstToken({token, node}:{token:string, node:Node}) {
    return <div className="EqualsToken">{token}</div>;
}

export default AstToken;