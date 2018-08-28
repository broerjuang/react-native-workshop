// @flow
/* eslint-disable no-undef */

import React from 'react';
import type {StyleObj} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

declare type StyleSet = StyleObj | Object | Array<StyleObj | Object>;

declare type ReactNode = React.Node;
declare type ReactEl = React.Element<*>;
declare type Route = {
  path: string;
  component: ReactEl;
  title: string;
  baseLink?: string;
  props?: {[key: string]: mixed};
  search?: string;
};

type ObjectOf<T> = {[key: string]: T};

declare type JSONData =
  | string
  | number
  | boolean
  | Array<JSONData>
  | ObjectOf<JSONData>;
