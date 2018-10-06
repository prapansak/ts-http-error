import IHttpError, { HTTP_STATUS_CODE } from './IHttpError'

export default class HttpError implements IHttpError {
  public name: string
  public code: string | number
  public status: HTTP_STATUS_CODE
  public message: string
  public stack?: string

  constructor(code: string | number, message: string, status: HTTP_STATUS_CODE) {
    this.name = 'HTTP_ERROR'
    this.code = code
    this.status = status
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
}