import { ReactNode } from "react";
import { ArrayBindingPattern, Identifier, Node, StringLiteral, SyntaxKind, SyntaxList, VariableDeclaration, VariableStatement } from "ts-morph"
import AstSyntaxList from "./AstSyntaxList";
import AstVariableStatement from "./AstVariableStatement";
import AstKeyword from "./AstKeyword";
import AstVariableDeclaration from "./AstVariableDeclaration";
import AstStringLiteral from "./AstStringLiteral";
import AstIdentifier from "./AstIdentifier";
import AstToken from "./AstToken";
import AstSingleLineCommentTrivia from "./AstSingleLineCommentTrivia";
import AstArrayBindingPattern from "./AstArrayBindingPattern";

const renderNode = (node:Node):ReactNode => {
    switch (node.getKind()) {
        case SyntaxKind.ArrayBindingPattern:     return <AstArrayBindingPattern node={node as ArrayBindingPattern} />
        case SyntaxKind.CommaToken:              return <AstToken   token="," node={node} />
        case SyntaxKind.DotToken:                return <AstToken   token="." node={node} />
        case SyntaxKind.DotDotDotToken:          return <AstToken   token="..." node={node} />
        case SyntaxKind.SemicolonToken:          return <AstToken   token=";" node={node} />
        case SyntaxKind.QuestionDotToken:        return <AstToken   token="?." node={node} />
        case SyntaxKind.ConstKeyword:            return <AstKeyword keyword="const" node={node} />;
        case SyntaxKind.VarKeyword:              return <AstKeyword keyword="var" node={node} />
        case SyntaxKind.EqualsToken:             return <AstToken   token="=" node={node} />
        case SyntaxKind.EqualsEqualsToken:       return <AstToken   token="==" node={node} />
        case SyntaxKind.EqualsEqualsEqualsToken: return <AstToken   token="===" node={node} />
        case SyntaxKind.ExclamationEqualsToken:  return <AstToken   token="!=" node={node} />
        case SyntaxKind.EndOfFileToken:          return <></>
        case SyntaxKind.Identifier:              return <AstIdentifier node={node as Identifier} />
        case SyntaxKind.OpenBracketToken:        return <AstToken   token="[" node={node} />
        case SyntaxKind.CloseBracketToken:       return <AstToken   token="]" node={node} />
        case SyntaxKind.OpenBraceToken:          return <AstToken   token="{" node={node} />
        case SyntaxKind.CloseBraceToken:         return <AstToken   token="}" node={node} />
        case SyntaxKind.OpenParenToken:          return <AstToken   token="(" node={node} />
        case SyntaxKind.CloseParenToken:         return <AstToken   token=")" node={node} />
        case SyntaxKind.SingleLineCommentTrivia: return <AstSingleLineCommentTrivia node={node} />
        case SyntaxKind.StringLiteral:           return <AstStringLiteral node={node as StringLiteral} />
        case SyntaxKind.SyntaxList:              return <AstSyntaxList node={node as SyntaxList} />;
        case SyntaxKind.VariableStatement:       return <AstVariableStatement node={node as VariableStatement} />
        case SyntaxKind.VariableDeclaration:     return <AstVariableDeclaration node={node as VariableDeclaration} />
        default:
            return <ul>
                <li>{node.getKindName()}</li>
                <li>{node.getText()}</li>
            </ul>
    }
}

export default renderNode;