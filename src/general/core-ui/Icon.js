// @flow
import React from 'react';
import {
  Ionicons,
  Octicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

type IconProps = {
  name: string,
  size: number,
  color: string,
  type: 'IONICONS' | 'OCTICONS' | 'FONTAWESOME' | 'MATERIAL_ICONS' | 'MATERIAL_COMMUNITY_ICONS',
};

function Icon(props: IconProps) {
  let {name, size, color, type} = props;
  switch (type) {
    case 'IONICONS':
      return <Ionicons name={name} size={size} color={color} />;
    case 'OCTICONS':
      return <Octicons name={name} size={size} color={color} />;
    case 'FONTAWESOME':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'MATERIAL_ICONS':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'MATERIAL_COMMUNITY_ICONS':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      return null;
  }
}

export default Icon;
