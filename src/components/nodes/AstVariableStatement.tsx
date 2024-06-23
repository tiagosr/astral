import { VariableStatement } from "ts-morph"
import renderNode from "./AstRender";

export default function AstVariableStatement({node}:{node:VariableStatement}) {

    return <div className="VariableStatement">
        {node.getChildren().map(renderNode)}
    </div>
}
