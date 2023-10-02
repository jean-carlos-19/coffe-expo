import React from 'react';
import { View, Image, Text } from 'react-native';
import { BellIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { IMAGES } from '@/constants';
import { theme } from '@/atomic/theme';
import { AVATAR } from '@/constants';

{
 /* avatar and bell icon */
}

const Avatar = () => {
 return (
  <View className={'px-2 py-4 flex-row justify-between items-center z-20'}>
   <Image className="w-9 h-9 rounded-full" source={IMAGES.AVATAR.IMG.SRC} alt={IMAGES.AVATAR.IMG.ALT} />
   <View className="flex-row items-center space-x-2">
    <MapPinIcon size={25} color={theme.bgLight} />
    <Text className="text-base font-semibold text-gray-700">{AVATAR.TITLE}</Text>
   </View>
   <BellIcon className="" size={27} color={'black'} />
  </View>
 );
};

export { Avatar };
