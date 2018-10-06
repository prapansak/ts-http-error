import HttpError from './HttpError'
import { HTTP_STATUS_CODE } from './IHttpError'

/**
 * Status 400
 * @param code
 * @param message
 */
export function BadRequest(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.BAD_REQUEST)
}

/**
 * Status 401
 * @param code
 * @param message
 */
export function UnAuthorized(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.UNAUTHORIZED)
}

/**
 * Status 402
 * @param code
 * @param message
 */
export function PaymentRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.PAYMENT_REQUIRED)
}

/**
 * Status 403
 * @param code
 * @param message
 */
export function Forbidden(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.FORBIDDEN)
}

/**
 * Status 404
 * @param code
 * @param message
 */
export function NotFound(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.NOT_FOUND)
}

/**
 * Status 405
 * @param code
 * @param message
 */
export function MethodNotAllowed(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.METHOD_NOT_ALLOWED)
}

/**
 * Status 406
 * @param code
 * @param message
 */
export function NotAcceptable(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.NOT_ACCEPTABLE)
}

/**
 * Status 407
 * @param code
 * @param message
 */
export function ProxyAuthemticationRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.PROXY_AUTHENTICATION_REQUIRED)
}

/**
 * Status 408
 * @param code
 * @param message
 */
export function RequestTimeout(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.REQUEST_TIMEOUT)
}

/**
 * Status 409
 * @param code
 * @param message
 */
export function ConFlict(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.CONFLICT)
}

/**
 * Status 410
 * @param code
 * @param message
 */
export function Gone(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.GONE)
}

/**
 * Status 411
 * @param code
 * @param message
 */
export function LengthRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.LENGTH_REQUIRED)
}

/**
 * Status 412
 * @param code
 * @param message
 */
export function PreConditionFailed(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.PRECONDITION_FAILED)
}

/**
 * Status 413
 * @param code
 * @param message
 */
export function RequestEntityTooLarge(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.REQUEST_ENTITY_TOO_LARGE)
}

/**
 * Status 414
 * @param code
 * @param message
 */
export function RequestURITooLong(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.REQUEST_URI_TOO_LONG)
}

/**
 * Status 415
 * @param code
 * @param message
 */
export function UnSupportedMediaType(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.UNSUPPORTED_MEDIA_TYPE)
}

/**
 * Status 416
 * @param code
 * @param message
 */
export function RequestedRangeNotSatisfiable(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.REQUESTED_RANGE_NOT_SATISFIABLE)
}

/**
 * Status 417
 * @param code
 * @param message
 */
export function ExpectationFailed(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.EXPECTATION_FAILED)
}

/**
 * Status 418
 * @param code
 * @param message
 */
export function ImATeapot(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.IM_A_TEAPOT)
}

/**
 * Status 421
 * @param code
 * @param message
 */
export function MisDirectedRequest(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.MISDIRECTED_REQUEST)
}

/**
 * Status 422
 * @param code
 * @param message
 */
export function UnProcessableEntity(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY)
}

/**
 * Status 423
 * @param code
 * @param message
 */
export function Locked(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.LOCKED)
}

/**
 * Status 424
 * @param code
 * @param message
 */
export function FailedDependency(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.FAILED_DEPENDENCY)
}

/**
 * Status 426
 * @param code
 * @param message
 */
export function UpgradeRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.UPGRADE_REQUIRED)
}

/**
 * Status 428
 * @param code
 * @param message
 */
export function PreconditionRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.PRECONDITION_REQUIRED)
}

/**
 * Status 429
 * @param code
 * @param message
 */
export function TooManyRequests(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.TOO_MANY_REQUESTS)
}

/**
 * Status 431
 * @param code
 * @param message
 */
export function RequestHeaderFieldsTooLarge(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.REQUEST_HEADER_FIELDS_TOO_LARGE)
}

/**
 * Status 451
 * @param code
 * @param message
 */
export function UnavailableForLegalReasons(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.UNAVAILABLE_FOR_LEGAL_REASONS)
}

/**
 * Status 500
 * @param code
 * @param message
 */
export function InternalServerError(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
}

/**
 * Status 501
 * @param code
 * @param message
 */
export function NotImplemented(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.NOT_IMPLEMENTED)
}

/**
 * Status 502
 * @param code
 * @param message
 */
export function BadGateway(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.BAD_GATEWAY)
}

/**
 * Status 503
 * @param code
 * @param message
 */
export function ServiceUnavailable(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.SERVICE_UNAVAILABLE)
}

/**
 * Status 504
 * @param code
 * @param message
 */
export function GatewayTimeout(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.GATEWAY_TIMEOUT)
}

/**
 * Status 505
 * @param code
 * @param message
 */
export function HttpVersionNotSupported(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.HTTP_VERSION_NOT_SUPPORTED)
}

/**
 * Status 506
 * @param code
 * @param message
 */
export function VariantAlsoNegotiates(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.VARIANT_ALSO_NEGOTIATES)
}

/**
 * Status 507
 * @param code
 * @param message
 */
export function InsufficientStorage(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.INSUFFICIENT_STORAGE)
}

/**
 * Status 508
 * @param code
 * @param message
 */
export function LoopDetected(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.LOOP_DETECTED)
}

/**
 * Status 510
 * @param code
 * @param message
 */
export function NotExtended(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.NOT_EXTENDED)
}

/**
 * Status 511
 * @param code
 * @param message
 */
export function NetworkAuthenticationRequired(code: string | number, message: string) {
  return new HttpError(code, message, HTTP_STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED)
}
