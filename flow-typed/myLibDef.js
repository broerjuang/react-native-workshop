//@flow

declare function fetch<T>(
  url: string,
  object?: Object,
): Promise<{json: () => T; text: () => string}>;
