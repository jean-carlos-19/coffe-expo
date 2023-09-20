import { GradeProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';

const Grade = (props: GradeProps) => {
 const { stars } = props;
 return (
  <View
   style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
   className="w-[30%] px-2 py-1 flex-row items-center rounded-3xl space-x-2"
  >
   <StarIcon size={15} color={'white'} />
   <Text className="text-base font-semibold text-white">{stars}</Text>
  </View>
 );
};

export { Grade };
