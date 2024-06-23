import { Node } from "ts-morph";

export default function AstKeyword({keyword, node}: {keyword: string, node:Node}) {
    return <span className="Keyword">{keyword}</span>;
}