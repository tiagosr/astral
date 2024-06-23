import { Node } from "ts-morph";

export default function AstSingleLineCommentTrivia({node}: {node:Node}) {
    return <span className="SingleLineCommentTrivia">{node.getText()}</span>
}
