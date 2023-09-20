import React from 'react';
import { IMAGES } from '@/constants';
import { Avatar } from './Avatar';
import { Image } from 'react-native';

const Header = () => {
 return (
  <>
   <Image
    className="w-full h-[20%] absolute opacity-10 z-10"
    source={IMAGES.BEANS_1.IMG.SRC}
    alt={IMAGES.BEANS_1.IMG.ALT}
   />
   <Avatar />
  </>
 );
};

export { Header };
