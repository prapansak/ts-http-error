import IHttpError, { HTTP_STATUS_CODE } from './IHttpError';
export default class HttpError implements IHttpError {
    name: string;
    code: string | number;
    status: HTTP_STATUS_CODE;
    message: string;
    stack?: string;
    constructor(code: string | number, message: string, status: HTTP_STATUS_CODE);
}
