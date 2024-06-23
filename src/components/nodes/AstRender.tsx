import { ReactNode } from "react";
import { ArrayBindingPattern, FunctionDeclaration, FunctionExpression, Identifier, Node, StringLiteral, SyntaxKind, SyntaxList, VariableDeclaration, VariableStatement } from "ts-morph"
import AstSyntaxList from "./AstSyntaxList";
import AstVariableStatement from "./AstVariableStatement";
import AstKeyword from "./AstKeyword";
import AstVariableDeclaration from "./AstVariableDeclaration";
import AstStringLiteral from "./AstStringLiteral";
import AstIdentifier from "./AstIdentifier";
import AstToken from "./AstToken";
import AstSingleLineCommentTrivia from "./AstSingleLineCommentTrivia";
import AstArrayBindingPattern from "./AstArrayBindingPattern";
import AstFunctionExpression from "./AstFunctionExpression";
import AstFunctionDeclaration from "./AstFunctionDeclaration";

const renderNode = (node:Node):ReactNode => {
    switch (node.getKind()) {
        case SyntaxKind.ArrayBindingPattern:            return <AstArrayBindingPattern node={node as ArrayBindingPattern} />
        case SyntaxKind.CommaToken:                     return <AstToken   token="," node={node} />
        case SyntaxKind.DotToken:                       return <AstToken   token="." node={node} />
        case SyntaxKind.DotDotDotToken:                 return <AstToken   token="..." node={node} />
        case SyntaxKind.SemicolonToken:                 return <AstToken   token=";" node={node} />
        case SyntaxKind.ColonToken:                     return <AstToken   token=":" node={node} />
        case SyntaxKind.AtToken:                        return <AstToken   token="@" node={node} />
        case SyntaxKind.QuestionDotToken:               return <AstToken   token="?." node={node} />
        case SyntaxKind.QuestionQuestionToken:          return <AstToken   token="??" node={node} />
        case SyntaxKind.QuestionQuestionEqualsToken:    return <AstToken   token="??=" node={node} />
        case SyntaxKind.EqualsToken:                    return <AstToken   token="=" node={node} />
        case SyntaxKind.EqualsEqualsToken:              return <AstToken   token="==" node={node} />
        case SyntaxKind.EqualsEqualsEqualsToken:        return <AstToken   token="===" node={node} />
        case SyntaxKind.EqualsGreaterThanToken:         return <AstToken   token="=>" node={node} />
        case SyntaxKind.ExclamationToken:               return <AstToken   token="!" node={node} />
        case SyntaxKind.ExclamationEqualsToken:         return <AstToken   token="!=" node={node} />
        case SyntaxKind.LessThanToken:                  return <AstToken   token="<" node={node} />
        case SyntaxKind.LessThanEqualsToken:            return <AstToken   token="<=" node={node} />
        case SyntaxKind.LessThanLessThanToken:          return <AstToken   token="<<" node={node} />
        case SyntaxKind.GreaterThanToken:               return <AstToken   token=">" node={node} />
        case SyntaxKind.GreaterThanEqualsToken:         return <AstToken   token=">=" node={node} />
        case SyntaxKind.GreaterThanGreaterThanToken:    return <AstToken   token=">>" node={node} />
        case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
                                                        return <AstToken   token=">>>" node={node} />
        case SyntaxKind.PlusToken:                      return <AstToken   token="+" node={node} />
        case SyntaxKind.PlusPlusToken:                  return <AstToken   token="++" node={node} />
        case SyntaxKind.PlusEqualsToken:                return <AstToken   token="+=" node={node} />
        case SyntaxKind.MinusToken:                     return <AstToken   token="-" node={node} />
        case SyntaxKind.MinusMinusToken:                return <AstToken   token="--" node={node} />
        case SyntaxKind.MinusEqualsToken:               return <AstToken   token="-=" node={node} />
        case SyntaxKind.AsteriskToken:                  return <AstToken   token="*" node={node} />
        case SyntaxKind.AsteriskAsteriskToken:          return <AstToken   token="**" node={node} />
        case SyntaxKind.AsteriskEqualsToken:            return <AstToken   token="*=" node={node} />
        case SyntaxKind.AsteriskAsteriskEqualsToken:    return <AstToken   token="**=" node={node} />
        case SyntaxKind.SlashToken:                     return <AstToken   token="/" node={node} />
        case SyntaxKind.SlashEqualsToken:               return <AstToken   token="/=" node={node} />
        case SyntaxKind.PercentToken:                   return <AstToken   token="%" node={node} />
        case SyntaxKind.PercentEqualsToken:             return <AstToken   token="%=" node={node} />
        case SyntaxKind.AmpersandToken:                 return <AstToken   token="&" node={node} />
        case SyntaxKind.AmpersandAmpersandToken:        return <AstToken   token="&&" node={node} />
        case SyntaxKind.AmpersandEqualsToken:           return <AstToken   token="&=" node={node} />
        case SyntaxKind.AmpersandAmpersandEqualsToken:  return <AstToken   token="&&=" node={node} />
        case SyntaxKind.BarToken:                       return <AstToken   token="|" node={node} />
        case SyntaxKind.BarBarToken:                    return <AstToken   token="||" node={node} />
        case SyntaxKind.BarEqualsToken:                 return <AstToken   token="|=" node={node} />
        case SyntaxKind.BarBarEqualsToken:              return <AstToken   token="||=" node={node} />
        case SyntaxKind.TildeToken:                     return <AstToken   token="~" node={node} />
        case SyntaxKind.CaretToken:                     return <AstToken   token="^" node={node} />
        case SyntaxKind.CaretEqualsToken:               return <AstToken   token="^=" node={node} />
        case SyntaxKind.OpenBracketToken:               return <AstToken   token="[" node={node} />
        case SyntaxKind.CloseBracketToken:              return <AstToken   token="]" node={node} />
        case SyntaxKind.OpenBraceToken:                 return <AstToken   token="{" node={node} />
        case SyntaxKind.CloseBraceToken:                return <AstToken   token="}" node={node} />
        case SyntaxKind.OpenParenToken:                 return <AstToken   token="(" node={node} />
        case SyntaxKind.CloseParenToken:                return <AstToken   token=")" node={node} />
        case SyntaxKind.BacktickToken:                  return <AstToken   token="`" node={node} />
        case SyntaxKind.HashToken:                      return <AstToken   token="#" node={node} />
        case SyntaxKind.AbstractKeyword:                return <AstKeyword keyword="abstract" node={node} />;
        case SyntaxKind.AccessorKeyword:                return <AstKeyword keyword="accessor" node={node} />;
        case SyntaxKind.AnyKeyword:                     return <AstKeyword keyword="any" node={node} />;
        case SyntaxKind.AsKeyword:                      return <AstKeyword keyword="as" node={node} />;
        case SyntaxKind.AssertKeyword:                  return <AstKeyword keyword="assert" node={node} />;
        case SyntaxKind.AssertsKeyword:                 return <AstKeyword keyword="asserts" node={node} />;
        case SyntaxKind.AsyncKeyword:                   return <AstKeyword keyword="async" node={node} />;
        case SyntaxKind.AwaitKeyword:                   return <AstKeyword keyword="await" node={node} />;
        case SyntaxKind.BigIntKeyword:                  return <AstKeyword keyword="bigint" node={node} />;
        case SyntaxKind.BooleanKeyword:                 return <AstKeyword keyword="boolean" node={node} />;
        case SyntaxKind.BreakKeyword:                   return <AstKeyword keyword="break" node={node} />;
        case SyntaxKind.CaseKeyword:                    return <AstKeyword keyword="case" node={node} />;
        case SyntaxKind.CatchKeyword:                   return <AstKeyword keyword="catch" node={node} />;
        case SyntaxKind.ClassKeyword:                   return <AstKeyword keyword="class" node={node} />;
        case SyntaxKind.ConstKeyword:                   return <AstKeyword keyword="const" node={node} />;
        case SyntaxKind.ConstructorKeyword:             return <AstKeyword keyword="constructor" node={node} />;
        case SyntaxKind.ContinueKeyword:                return <AstKeyword keyword="continue" node={node} />;
        case SyntaxKind.DebuggerKeyword:                return <AstKeyword keyword="debugger" node={node} />;
        case SyntaxKind.DeclareKeyword:                 return <AstKeyword keyword="declare" node={node} />;
        case SyntaxKind.DefaultKeyword:                 return <AstKeyword keyword="default" node={node} />;
        case SyntaxKind.DeleteKeyword:                  return <AstKeyword keyword="delete" node={node} />;
        case SyntaxKind.DoKeyword:                      return <AstKeyword keyword="do" node={node} />;
        case SyntaxKind.ElseKeyword:                    return <AstKeyword keyword="else" node={node} />;
        case SyntaxKind.EnumKeyword:                    return <AstKeyword keyword="enum" node={node} />;
        case SyntaxKind.ExportKeyword:                  return <AstKeyword keyword="export" node={node} />;
        case SyntaxKind.FalseKeyword:                   return <AstKeyword keyword="false" node={node} />;
        case SyntaxKind.FinallyKeyword:                 return <AstKeyword keyword="finally" node={node} />;
        case SyntaxKind.ForKeyword:                     return <AstKeyword keyword="for" node={node} />;
        case SyntaxKind.FromKeyword:                    return <AstKeyword keyword="from" node={node} />;
        case SyntaxKind.FunctionKeyword:                return <AstKeyword keyword="function" node={node} />;
        case SyntaxKind.GetKeyword:                     return <AstKeyword keyword="get" node={node} />;
        case SyntaxKind.GlobalKeyword:                  return <AstKeyword keyword="global" node={node} />;
        case SyntaxKind.IfKeyword:                      return <AstKeyword keyword="if" node={node} />;
        case SyntaxKind.ImplementsKeyword:              return <AstKeyword keyword="implements" node={node} />;
        case SyntaxKind.ImportKeyword:                  return <AstKeyword keyword="import" node={node} />;
        case SyntaxKind.InKeyword:                      return <AstKeyword keyword="in" node={node} />;
        case SyntaxKind.InferKeyword:                   return <AstKeyword keyword="infer" node={node} />;
        case SyntaxKind.InstanceOfKeyword:              return <AstKeyword keyword="instanceof" node={node} />;
        case SyntaxKind.InterfaceKeyword:               return <AstKeyword keyword="interface" node={node} />;
        case SyntaxKind.IntrinsicKeyword:               return <AstKeyword keyword="intrinsic" node={node} />;
        case SyntaxKind.IsKeyword:                      return <AstKeyword keyword="is" node={node} />;
        case SyntaxKind.KeyOfKeyword:                   return <AstKeyword keyword="keyof" node={node} />;
        case SyntaxKind.LetKeyword:                     return <AstKeyword keyword="let" node={node} />;
        case SyntaxKind.ModuleKeyword:                  return <AstKeyword keyword="module" node={node} />;
        case SyntaxKind.NamespaceKeyword:               return <AstKeyword keyword="namespace" node={node} />;
        case SyntaxKind.NeverKeyword:                   return <AstKeyword keyword="never" node={node} />;
        case SyntaxKind.NewKeyword:                     return <AstKeyword keyword="new" node={node} />;
        case SyntaxKind.NullKeyword:                    return <AstKeyword keyword="null" node={node} />;
        case SyntaxKind.NumberKeyword:                  return <AstKeyword keyword="number" node={node} />;
        case SyntaxKind.ObjectKeyword:                  return <AstKeyword keyword="object" node={node} />;
        case SyntaxKind.OfKeyword:                      return <AstKeyword keyword="of" node={node} />;
        case SyntaxKind.OutKeyword:                     return <AstKeyword keyword="out" node={node} />;
        case SyntaxKind.OverrideKeyword:                return <AstKeyword keyword="override" node={node} />;
        case SyntaxKind.PackageKeyword:                 return <AstKeyword keyword="package" node={node} />;
        case SyntaxKind.PrivateKeyword:                 return <AstKeyword keyword="private" node={node} />;
        case SyntaxKind.ProtectedKeyword:               return <AstKeyword keyword="protected" node={node} />;
        case SyntaxKind.PublicKeyword:                  return <AstKeyword keyword="public" node={node} />;
        case SyntaxKind.ReadonlyKeyword:                return <AstKeyword keyword="readonly" node={node} />;
        case SyntaxKind.RequireKeyword:                 return <AstKeyword keyword="require" node={node} />;
        case SyntaxKind.ReturnKeyword:                  return <AstKeyword keyword="return" node={node} />;
        case SyntaxKind.SatisfiesKeyword:               return <AstKeyword keyword="satisfies" node={node} />;
        case SyntaxKind.SetKeyword:                     return <AstKeyword keyword="set" node={node} />;
        case SyntaxKind.StaticKeyword:                  return <AstKeyword keyword="static" node={node} />;
        case SyntaxKind.StringKeyword:                  return <AstKeyword keyword="string" node={node} />;
        case SyntaxKind.SuperKeyword:                   return <AstKeyword keyword="super" node={node} />;
        case SyntaxKind.SwitchKeyword:                  return <AstKeyword keyword="switch" node={node} />;
        case SyntaxKind.SymbolKeyword:                  return <AstKeyword keyword="symbol" node={node} />;
        case SyntaxKind.ThisKeyword:                    return <AstKeyword keyword="this" node={node} />;
        case SyntaxKind.ThrowKeyword:                   return <AstKeyword keyword="throw" node={node} />;
        case SyntaxKind.TrueKeyword:                    return <AstKeyword keyword="true" node={node} />;
        case SyntaxKind.TryKeyword:                     return <AstKeyword keyword="try" node={node} />;
        case SyntaxKind.TypeKeyword:                    return <AstKeyword keyword="type" node={node} />;
        case SyntaxKind.TypeOfKeyword:                  return <AstKeyword keyword="typeof" node={node} />;
        case SyntaxKind.UndefinedKeyword:               return <AstKeyword keyword="undefined" node={node} />;
        case SyntaxKind.UniqueKeyword:                  return <AstKeyword keyword="unique" node={node} />;
        case SyntaxKind.UnknownKeyword:                 return <AstKeyword keyword="unknown" node={node} />;
        case SyntaxKind.UsingKeyword:                   return <AstKeyword keyword="using" node={node} />;
        case SyntaxKind.VarKeyword:                     return <AstKeyword keyword="var" node={node} />
        case SyntaxKind.VoidKeyword:                    return <AstKeyword keyword="void" node={node} />
        case SyntaxKind.WhileKeyword:                   return <AstKeyword keyword="while" node={node} />
        case SyntaxKind.WithKeyword:                    return <AstKeyword keyword="with" node={node} />
        case SyntaxKind.YieldKeyword:                   return <AstKeyword keyword="yield" node={node} />
        case SyntaxKind.SingleLineCommentTrivia:        return <AstSingleLineCommentTrivia node={node} />
        case SyntaxKind.EndOfFileToken:                 return <></>
        case SyntaxKind.Identifier:                     return <AstIdentifier node={node as Identifier} />
        case SyntaxKind.StringLiteral:                  return <AstStringLiteral node={node as StringLiteral} />
        case SyntaxKind.SyntaxList:                     return <AstSyntaxList node={node as SyntaxList} />;
        case SyntaxKind.VariableStatement:              return <AstVariableStatement node={node as VariableStatement} />
        case SyntaxKind.VariableDeclaration:            return <AstVariableDeclaration node={node as VariableDeclaration} />
        case SyntaxKind.FunctionExpression:             return <AstFunctionExpression node={node as FunctionExpression} />
        case SyntaxKind.FunctionDeclaration:            return <AstFunctionDeclaration node={node as FunctionDeclaration} />
        default:
            return <ul>
                <li>{node.getKindName()}</li>
                <li>{node.getText()}</li>
            </ul>
    }
}

export default renderNode;