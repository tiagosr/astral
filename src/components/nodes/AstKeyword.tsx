import { Node } from "ts-morph";

function AstKeyword({keyword, node}: {keyword: string, node:Node}) {
    return <div>{keyword}</div>;
}

export default AstKeyword;