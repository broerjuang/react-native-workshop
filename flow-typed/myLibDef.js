//@flow

declare function fetch<T>(
  url: string,
  object?: Object,
): Promise<{json: () => T; text: () => string}>;

declare type ReactTestRenderer = {
  toJSON(): null | ReactTestRendererJSON;
  toTree(): null | ReactTestRendererTree;
  unmount(nextElement?: React$Element<any>): void;
  update(nextElement: React$Element<any>): void;
  getInstance(): null | ReactTestInstance;
  root: ReactTestInstance;
};
