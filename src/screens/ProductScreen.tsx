import React, { useState } from 'react';
import { StarIcon } from 'react-native-heroicons/outline';
import { View, Image, Text, StatusBar } from 'react-native';
import { IMAGES, typesButtonConst, typesIcon } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '@/atomic/elements';
import { Shadow } from 'react-native-shadow-2';
import { theme } from '@/atomic/theme';

const contentProduct = Object.freeze({
 details: {
  volumen: 'Volumen',
  about: 'About',
  size: 'Coffee size',
 },
 button: {
  buy: 'buy now',
 },
});

const ProductScreen = (props: any) => {
 const { item } = props.route.params;
 const { image, stars, name, price, desc, volume } = item;
 const navigation = useNavigation();
 const [size, set_size] = useState('small');
 return (
  <>
   <StatusBar backgroundColor={theme.bgDark} />
   <View className="w-full h-full flex-col justify-between items-stretch">
    <Image className="w-full h-2/6 absolute " source={IMAGES.BEANS_2.IMG.SRC} alt={IMAGES.BEANS_1.IMG.ALT} />

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
       <Image style={{ borderRadius: 240 }} source={image} className="h-60 w-60 rounded-full" />
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
       {contentProduct.details.size}
      </Text>

      <View className="flex-row justify-between">
       <CustomButton
        type={typesButtonConst.default}
        bacground={size === 'small' ? theme.bgLight : 'rgba(0,0,0,0.07)'}
        stylyButton="p-3 px-8 rounded-full"
        stylyText={size === 'small' ? 'text-white' : 'text-gray-700'}
        text="Smal"
        handlerPress={() => set_size('small')}
       />

       <CustomButton
        type={typesButtonConst.default}
        bacground={size === 'medium' ? theme.bgLight : 'rgba(0,0,0,0.07)'}
        stylyButton="p-3 px-8 rounded-full"
        stylyText={size === 'medium' ? 'text-white' : 'text-gray-700'}
        text="Smal"
        handlerPress={() => set_size('medium')}
       />

       <CustomButton
        type={typesButtonConst.default}
        bacground={size === 'larger' ? theme.bgLight : 'rgba(0,0,0,0.07)'}
        stylyButton="p-3 px-8 rounded-full"
        stylyText={size === 'larger' ? 'text-white' : 'text-gray-700'}
        text="Smal"
        handlerPress={() => set_size('larger')}
       />
      </View>
     </View>

     <View className="mx-4 space-y-2 h-28">
      <Text
       style={{
        color: theme.text,
       }}
       className="text-lg font-bold"
      >
       {contentProduct.details.about}
      </Text>
      <Text className="text-gray-700">{desc}</Text>
     </View>

     <View className="flex-row justify-between items-center mx-4 mb-2">
      <View className="flex-row items-center space-x-1">
       <Text className="text-base text-gray-700 font-semibold opacity-60">{contentProduct.details.volumen}</Text>
       <Text className="text-base text-gray-700 font-semibold">{volume}</Text>
      </View>

      <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
       <CustomButton
        type={typesButtonConst.icon}
        icon={{
         color: theme.text,
         size: 20,
         strokeWidth: 3,
         type: typesIcon.MinusIcon,
        }}
       />
       <View></View>
       <Text style={{ color: theme.text }} className="font-extrabold text-lg">
        {2}
       </Text>
       <View></View>
       <CustomButton
        type={typesButtonConst.icon}
        icon={{
         color: theme.text,
         size: 20,
         strokeWidth: 3,
         type: typesIcon.PlusIcon,
        }}
       />
      </View>
     </View>

     {/* buy now button */}
     <View className="flex-row justify-between mx-4">
      <CustomButton
       type={typesButtonConst.icon}
       stylyButton={`p-4 rounded-full border border-gray-400`}
       icon={{
        color: 'gray',
        size: 30,
        strokeWidth: 1,
        type: typesIcon.ShoppingBagIcon,
       }}
      />
      <CustomButton
       type={typesButtonConst.default}
       text={contentProduct.button.buy}
       bacground={theme.bgLight}
       stylyButton={`p-4 rounded-full flex-1 ml-3 bg-slate-100`}
       stylyText="text-center text-base font-semibold text-white"
      />
     </View>
    </View>
   </View>
  </>
 );
};

export { ProductScreen };
