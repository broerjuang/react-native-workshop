//@flow

declare function fetch(url: string, object?: Object): Promise<*>;

type JSONData =
  | null
  | void
  | string
  | number
  | boolean
  | {[string]: JSONData}
  | Array<JSONData>;
