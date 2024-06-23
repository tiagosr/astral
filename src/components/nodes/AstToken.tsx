import { Node } from "ts-morph";

export default function AstToken({token, node}:{token:string, node:Node}) {
    return <span className="Token">{token}</span>;
}
