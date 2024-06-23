import { Node } from "ts-morph";

export default function AstMultiLineCommentTrivia({node}: {node:Node}) {
    return <span className="MultiLineCommentTrivia">
        {node.getText().split('\n').map(piece => <div>{piece}</div>)}
    </span>
}
