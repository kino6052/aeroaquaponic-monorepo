export class Parser {
    constructor(lexer) {
        this.lexer = null;
        this.currentToken = null;
        this.lexer = lexer;
        this.currentToken = this.lexer.nextToken();
    }
    parse() {
        return this.parseElement();
    }
    parseElement() {
        this.consume("LESS_THAN");
        const tag = this.consume("IDENTIFIER").value;
        if (!this.currentToken) {
            throw new Error("No current token");
        }
        const node = {
            type: "Element",
            tag,
            children: [],
        };
        if (this.currentToken.type === "SLASH") {
            this.consume("SLASH");
            this.consume("GREATER_THAN");
            return node;
        }
        this.consume("GREATER_THAN");
        while (this.currentToken && this.currentToken.type !== "LESS_THAN") {
            const child = this.parseElement();
            node.children.push(child);
        }
        this.consume("LESS_THAN");
        this.consume("SLASH");
        this.consume("IDENTIFIER", tag);
        this.consume("GREATER_THAN");
        return node;
    }
    consume(type, value) {
        const token = this.currentToken;
        if (!this.lexer) {
            throw new Error("No lexer");
        }
        if (!token ||
            token.type !== type ||
            (value !== undefined && token.value !== value)) {
            throw new Error(`Expected token ${type}, got ${token === null || token === void 0 ? void 0 : token.type}`);
        }
        this.currentToken = this.lexer.nextToken();
        return token;
    }
}
// const input = `<div><span></span><br/></div>`;
// const lexer = new Lexer(input);
// const parser = new Parser(lexer);
// const ast = parser.parse();
// console.log(JSON.stringify(ast, null, 2));
