import { BackgroundProps } from '@/types';
import React from 'react';
import { ImageBackground } from 'react-native';
const Background = (props: BackgroundProps) => {
 const { children, image, className, alt } = props;
 return (
  <ImageBackground className={className} source={image} alt={alt}>
   {children}
  </ImageBackground>
 );
};

export { Background };
