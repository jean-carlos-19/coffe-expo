import { volumeProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';

const Volumen = (props: volumeProps) => {
 const { volume } = props;
 return (
  <View className="flex-row space-x-1 z-10 mb-6">
   <Text className="text-base text-white font-semibold opacity-60">
    Volumen
   </Text>
   <Text className="text-base text-white font-semibold">{volume}</Text>
  </View>
 );
};

export { Volumen };
