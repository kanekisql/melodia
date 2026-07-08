export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpRequestConfig = {
  readonly method: HttpMethod
  readonly url: string
  readonly headers?: Readonly<Record<string, string>>
  readonly body?: unknown
}
