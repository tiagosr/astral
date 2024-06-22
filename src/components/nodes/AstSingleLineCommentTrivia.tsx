import { Node } from "ts-morph";

function AstSingleLineCommentTrivia({node}: {node:Node}) {
    return <div className="SingleLineCommentTrivia">{node.getText()}</div>
}

export default AstSingleLineCommentTrivia;