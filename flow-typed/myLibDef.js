//@flow

declare function fetch(url: string, object?: Object): Promise<*>;

type JSON =
  | null
  | void
  | string
  | number
  | boolean
  | {[string]: JSON}
  | Array<JSON>;
