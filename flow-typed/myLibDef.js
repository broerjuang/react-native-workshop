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

declare type NavigationNavigateAction = {|
  type: 'Navigation/NAVIGATE';
  routeName: string;
  params?: NavigationParams;

  // The action to run inside the sub-router
  action?: NavigationNavigateAction;

  key?: string;
|};

declare type NavigationParams = {
  [key: string]: mixed;
};

declare type NavigationProp<T> = {
  state: {
    params: T;
  };
  getParam: (paramName: string, fallback?: any) => any;
  goBack: (routeKey?: ?string) => boolean;
  navigate: (
    routeName: | string
      | {
          routeName: string;
          params?: NavigationParams;
          action?: NavigationNavigateAction;
          key?: string;
        },
    params?: NavigationParams,
    action?: NavigationNavigateAction,
  ) => boolean;
  setParams: (newParams: NavigationParams) => boolean;
};
