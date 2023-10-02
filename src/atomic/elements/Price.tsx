import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/outline';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { PriceProps } from '@/types';

const Price = (props: PriceProps) => {
 const { item } = props;
 const navigation = useNavigation();
 return (
  <View className="flex-row justify-between items-center">
   <Text className="text-white font-bold text-lg">$ {item.price}</Text>
   <TouchableOpacity onPress={() => navigation.navigate('Product', { item })} className="p-4 bg-white rounded-full">
    <PlusIcon size={25} strokeWidth={2} color={theme.bgDark} />
   </TouchableOpacity>
  </View>
 );
};

export { Price };
