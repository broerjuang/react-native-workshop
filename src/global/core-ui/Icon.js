// @flow
import React from 'react';
import {
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

type IconProps = {
  name: string,
  size: number,
  color: string,
  type: 'ENTYPO' | 'EVIL_ICONS' | 'FEATHER' | 'FONTAWESOME' | 'FOUNDATION' | 'IONICONS' | 'OCTICONS'
    | 'MATERIAL_ICONS' | 'MATERIAL_COMMUNITY_ICONS',
};

function Icon(props: IconProps) {
  let {name, size, color, type} = props;
  switch (type) {
    case 'ENTYPO':
      return <Entypo name={name} size={size} color={color} />;
    case 'EVIL_ICONS':
      return <EvilIcons name={name} size={size} color={color} />;
    case 'FEATHER':
      return <Feather name={name} size={size} color={color} />;
    case 'FONTAWESOME':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'FOUNDATION':
      return <Foundation name={name} size={size} color={color} />;
    case 'IONICONS':
      return <Ionicons name={name} size={size} color={color} />;
    case 'OCTICONS':
      return <Octicons name={name} size={size} color={color} />;
    case 'MATERIAL_ICONS':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'MATERIAL_COMMUNITY_ICONS':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      return null;
  }
}

export default Icon;
