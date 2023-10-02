import React from 'react';
import {
 MapIcon,
 MagnifyingGlassIcon,
 StarIcon,
 PlusIcon,
 HeartIcon,
 ArrowLeftCircleIcon,
 ShoppingBagIcon,
 MinusIcon,
} from 'react-native-heroicons/solid';
import { IconProps } from '@/types';
import { typesIcon } from '@/constants';

const Icon = (props: IconProps) => {
 if (props.type === typesIcon.MapIcon) return <MapIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.ArrowLeftCircleIcon) return <ArrowLeftCircleIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.MagnifyingGlassIcon) return <MagnifyingGlassIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.StarIcon) return <StarIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.PlusIcon) return <PlusIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.HeartIcon) return <HeartIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.ShoppingBagIcon) return <ShoppingBagIcon size={props.size} color={props.color} />;
 if (props.type === typesIcon.MinusIcon) return <MinusIcon size={props.size} color={props.color} />;

 return null;
};

export { Icon };
