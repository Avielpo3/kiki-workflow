import { HttpStatusCode } from '@angular/common/http';

export class HttpServerError extends Error {
  clientMsg = '';

  constructor(
    public readonly httpStatusCode: HttpStatusCode,
    public readonly message: string,
    public url: string | null
  ) {
    super(message);
  }

  toString(): string {
    return `[StatusCode]${this.httpStatusCode}, ${this.clientMsg} [TO URL]${this.url} `;
  }
}
