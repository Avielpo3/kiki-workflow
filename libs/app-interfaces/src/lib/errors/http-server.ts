import { HttpErrorResponse } from '@angular/common/http';
import { HttpServerErrorMessage } from './error-type-msg';

export class HttpServerError extends Error {
  constructor(
    public readonly orgErr: HttpErrorResponse,
    public message: HttpServerErrorMessage
  ) {
    super();
  }

//   getUserMessage(): string {
//     let msg = 'error_occured';

//     switch (this.status) {
//       case HttpStatusCode.Unauthorized:
//         msg = 'username_or_password_is_wrong';
//         break;
//       case HttpStatusCode.Forbidden:
//         msg = 'end_point_forbbiden';
//         break;
//     }

//     return msg;
//   }
}
