export class Lexer {
  input: string = "";
  position: number = 0;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
  }

  nextToken() {
    this.skipWhitespace();

    if (this.position >= this.input.length) {
      return null;
    }

    const char = this.input[this.position];

    if (char === "<") {
      this.position++;
      return { type: "LESS_THAN", value: "<" };
    } else if (char === ">") {
      this.position++;
      return { type: "GREATER_THAN", value: ">" };
    } else if (char === "/") {
      this.position++;
      return { type: "SLASH", value: "/" };
    } else if (/[a-zA-Z]/.test(char)) {
      const identifier = this.readIdentifier();
      return { type: "IDENTIFIER", value: identifier };
    }

    throw new Error(`Unexpected character: ${char}`);
  }

  readIdentifier() {
    const startPosition = this.position;

    while (/[a-zA-Z]/.test(this.input[this.position])) {
      this.position++;
    }

    return this.input.slice(startPosition, this.position);
  }

  skipWhitespace() {
    while (/\s/.test(this.input[this.position])) {
      this.position++;
    }
  }
}
