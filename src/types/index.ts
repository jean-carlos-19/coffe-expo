import { statusButton, statusIcon } from '@/constants';
import { ImageSourcePropType } from 'react-native';

/* props components */
interface CoffeeCardProps {
 item: {
  image: any;
  name: string;
  stars: string;
  price: string;
  volume: string;
 };
}
interface BackgroundProps {
 className: string;
 children: React.ReactNode;
 image: ImageSourcePropType;
 alt: string;
}
interface BackgroundProps {
 className: string;
 children: React.ReactNode;
 image: ImageSourcePropType;
 alt: string;
}
interface AvatarProps {
 className: string;
}
interface CoffeBodayCard {
 item: {
  image: any;
  name: string;
  stars: string;
  price: string;
  volume: string;
 };
}
interface GradeProps {
 stars: string;
}
interface volumeProps {
 volume: string;
}
interface PriceProps {
 item: {
  image: any;
  name: string;
  stars: string;
  price: string;
  volume: string;
 };
}

type IconProps = {
 type: statusIcon;
 size: number;
 color: string;
 strokeWidth: number;
};
interface CustomButtonProps {
 icon?: IconProps;
 type: statusButton;
 isDisable?: boolean;
 stylyButton?: string;
 stylyText?: string;
 text?: string;
 handlerPress?: () => void;
}
/* roots navigation */
type RootStackParamList = {
 HomeButtons: undefined;
 Product: CoffeeCardProps;
};
type RootButtonParamList = {
 Home: undefined;
 Favourite: undefined;
 Cart: undefined;
};
export {
 RootStackParamList,
 CoffeeCardProps,
 BackgroundProps,
 CoffeBodayCard,
 volumeProps,
 AvatarProps,
 PriceProps,
 GradeProps,
 IconProps,
 RootButtonParamList,
 CustomButtonProps,
};
