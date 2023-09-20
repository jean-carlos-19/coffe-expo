import React from 'react';
import {
 MapIcon,
 MagnifyingGlassIcon,
 StarIcon,
 PlusIcon,
 HeartIcon,
 ArrowLeftCircleIcon,
} from 'react-native-heroicons/solid';
import { typesIcon } from '@/constants';
import { IconProps } from '@/types';

const Icon = (props: IconProps) => {
 const { type, size, color } = props;

 if (type === typesIcon.MapIcon) return <MapIcon size={size} color={color} />;
 if (type === typesIcon.ArrowLeftCircleIcon)
  return <ArrowLeftCircleIcon size={size} color={color} />;
 if (type === typesIcon.MagnifyingGlassIcon)
  return <MagnifyingGlassIcon size={size} color={color} />;
 if (type === typesIcon.StarIcon) return <StarIcon size={size} color={color} />;
 if (type === typesIcon.PlusIcon) return <PlusIcon size={size} color={color} />;
 if (type === typesIcon.HeartIcon)
  return <HeartIcon size={size} color={color} />;

 return null;
};

export { Icon };
