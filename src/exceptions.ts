export class ClientError extends Error {
  endpoint: string;
  statusCode: number;
  responseContent: ArrayBuffer;

  constructor(
    endpoint: string,
    statusCode: number,
    responseContent: ArrayBuffer,
  ) {
    super();
    this.endpoint = endpoint;
    this.statusCode = statusCode;
    this.responseContent = responseContent;
  }
}

export class InvalidParamsError extends Error {
  key: string;
  value: any;
  constructor(message: string, key: string, value: any) {
    super(message);
    this.key = key;
    this.value = value;
  }
}
