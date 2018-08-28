//@flow

declare function fetch<T>(
  url: string,
  object?: Object,
): Promise<{json: () => T; text: () => string}>;

declare class Error {
  static (message?: string): Error;
  constructor(message?: mixed): void;
  name: string;
  message: string;
  stack: string;
  toString(): string;

  // note: microsoft only
  description?: string;
  number?: number;

  // note: mozilla only
  fileName?: string;
  lineNumber?: number;
  columnNumber?: number;

  // note: v8 only (node/chrome)
  static captureStackTrace(target: Object, constructor?: Function): void;

  static stackTraceLimit: number;
  static prepareStackTrace: (err: Error, stack: CallSite[]) => mixed;
}
