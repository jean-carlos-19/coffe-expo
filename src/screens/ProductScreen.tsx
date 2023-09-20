import React, { useState } from 'react';
import {
 ArrowLeftCircleIcon,
 MinusIcon,
 PlusIcon,
 ShoppingBagIcon,
 StarIcon,
} from 'react-native-heroicons/outline';
import { View, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { Shadow } from 'react-native-shadow-2';
import { theme } from '@/atomic/theme';
import { IMAGES, typesButtonConst, typesIcon } from '@/constants';
import { CustomButton } from '@/atomic/elements';

const ProductScreen = (props: any) => {
 const { item } = props.route.params;
 const { image, stars, name, price, desc, volume } = item;
 const navigation = useNavigation();
 const [size, set_size] = useState('small');
 return (
  <>
   <StatusBar />
   <View className="w-full h-full flex-col justify-between items-stretch">
    <Image
     className="w-full h-2/6 absolute "
     source={IMAGES.BEANS_2.IMG.SRC}
     alt={IMAGES.BEANS_1.IMG.ALT}
    />

    <View className="space-y-4">
     <View className="mx-4 flex-row justify-between items-center">
      <CustomButton
       stylyButton={`rounded-full p-2 bg-[${theme.bgLight}]`}
       type={typesButtonConst.icon}
       handlerPress={() => navigation.goBack()}
       icon={{
        color: 'white',
        size: 50,
        strokeWidth: 1,
        type: typesIcon.ArrowLeftCircleIcon,
       }}
      />
      <CustomButton
       stylyButton={`rounded-full p-2 bg-[${theme.bgLight}]`}
       type={typesButtonConst.icon}
       icon={{
        color: 'white',
        size: 35,
        strokeWidth: 2,
        type: typesIcon.HeartIcon,
       }}
      />
     </View>

     <View className="flex-row justify-center">
      <Shadow startColor={theme.bgDarkRGBA} offset={[0, 30]}>
       <Image
        style={{ borderRadius: 240 }}
        source={image}
        className="h-60 w-60 rounded-full"
       />
      </Shadow>
     </View>

     <View
      style={{ backgroundColor: theme.bgLight }}
      className="mx-4 flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
     >
      <StarIcon size={15} color={'white'} />
      <Text className="text-base font-semibold text-white">{stars}</Text>
     </View>

     <View className="mx-4 flex-row justify-between items-center">
      <Text className="text-3xl font-semibold" style={{ color: theme.text }}>
       {name}
      </Text>
      <Text className="text-lg font-semibold" style={{ color: theme.text }}>
       ${price}
      </Text>
     </View>

     <View className="mx-4 space-y-2">
      <Text
       style={{
        color: theme.text,
       }}
       className="text-lg font-bold"
      >
       Coffee size
      </Text>
      <View className="flex-row justify-between">
       <TouchableOpacity
        onPress={() => set_size('small')}
        className="p-3 px-8 rounded-full"
        style={{
         backgroundColor: size === 'small' ? theme.bgLight : 'rgba(0,0,0,0.07)',
        }}
       >
        <Text className={size === 'small' ? 'text-white' : 'text-gray-700'}>
         Small
        </Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => set_size('medium')}
        className="p-3 px-8 rounded-full"
        style={{
         backgroundColor:
          size === 'medium' ? theme.bgLight : 'rgba(0,0,0,0.07)',
        }}
       >
        <Text className={size === 'medium' ? 'text-white' : 'text-gray-700'}>
         Medium
        </Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => set_size('larger')}
        className="p-3 px-8 rounded-full"
        style={{
         backgroundColor:
          size === 'larger' ? theme.bgLight : 'rgba(0,0,0,0.07)',
        }}
       >
        <Text className={size === 'larger' ? 'text-white' : 'text-gray-700'}>
         Larger
        </Text>
       </TouchableOpacity>
      </View>
     </View>

     <View className="mx-4 space-y-2 h-28">
      <Text
       style={{
        color: theme.text,
       }}
       className="text-lg font-bold"
      >
       About
      </Text>
      <Text className="text-gray-700">{desc}</Text>
     </View>

     <View className="flex-row justify-between items-center mx-4 mb-2">
      <View className="flex-row items-center space-x-1">
       <Text className="text-base text-gray-700 font-semibold opacity-60">
        Volume
       </Text>
       <Text className="text-base text-gray-700 font-semibold">{volume}</Text>
      </View>

      <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
       <TouchableOpacity>
        <MinusIcon size={20} strokeWidth={3} color={theme.text} />
       </TouchableOpacity>
       <Text style={{ color: theme.text }} className="font-extrabold text-lg">
        2
       </Text>
       <TouchableOpacity>
        <PlusIcon size={20} strokeWidth={3} color={theme.text} />
       </TouchableOpacity>
      </View>
     </View>

     {/* buy now button */}
     <View className="flex-row justify-between mx-4">
      <TouchableOpacity className="p-4 rounded-full border border-gray-400">
       <ShoppingBagIcon size={30} color={'gray'} />
      </TouchableOpacity>
      <TouchableOpacity
       style={{
        backgroundColor: theme.bgLight,
       }}
       className="p-4 rounded-full flex-1 ml-3"
      >
       <Text className="text-center text-base font-semibold text-white">
        Buy Now
       </Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </>
 );
};

export { ProductScreen };
