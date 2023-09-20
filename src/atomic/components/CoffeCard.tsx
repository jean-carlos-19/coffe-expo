import React from 'react';
import { View, Image, Text } from 'react-native';
import { theme } from '@/atomic/theme';
import { CoffeeCardProps } from '@/types';
import { Grade, Price, Volumen } from '../elements';

const CoffeeCard = (props: CoffeeCardProps) => {
 const { item } = props;

 return (
  <View
   style={{
    borderRadius: 40,
    backgroundColor: theme.bgDark,
   }}
   className="w-full flex-col justify-center items-stretch p-4 space-y-4"
  >
   <Image source={item.image} className="h-40 w-40 self-center" />
   <Text className="text-3xl text-white font-semibold z-10">{item.name}</Text>
   <View>
    <Grade stars={item.stars} />
   </View>
   <View>
    <Volumen volume={item.volume} />
   </View>
   <Price item={item} />
  </View>
 );
};

export { CoffeeCard };
