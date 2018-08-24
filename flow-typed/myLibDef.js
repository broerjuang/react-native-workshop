//@flow

declare function fetch(url: string, object?: Object): Promise<*>;
declare var __DEV__: boolean;

type JSONData =
  | null
  | void
  | string
  | number
  | boolean
  | {[string]: JSONData}
  | Array<JSONData>;
