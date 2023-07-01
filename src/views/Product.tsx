import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { IMGENS } from "@/global/img";
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon, ShoppingBagIcon, StarIcon } from "react-native-heroicons/outline";
import Constans from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { HeartIcon } from "react-native-heroicons/solid";
import { theme } from "@/global/theme";

const { statusBarHeight } = Constans;

const Product = (props: any) => {
  const { item } = props.route.params;
  const { image, stars, name, price, desc, volume } = item;
  const navigation = useNavigation();
  const [size, set_size] = useState("small")
  return (
    <View className="flex-1" style={{ paddingTop: statusBarHeight + 16 }}>

      <StatusBar style="light" />

      <Image
        source={IMGENS.beansBackground2}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      />

      <View className="space-y-4">

        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size={24} color={"white"} />
          </TouchableOpacity>
        </View>

        <View
          className="flex-row justify-center"
          style={{
            shadowColor: theme.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9
          }}
        >
          <Image
            source={image}
            className="h-60 w-60"
          />
        </View>

        <View
          style={{ backgroundColor: theme.bgLight }}
          className="mx-4 flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
        >
          <StarIcon size={15} color={"white"} />
          <Text className="text-base font-semibold text-white">
            {stars}
          </Text>
        </View>

        <View
          className="mx-4 flex-row justify-between items-center"
        >
          <Text
            className="text-3xl font-semibold"
            style={{ color: theme.text }}
          >
            {name}
          </Text>
          <Text
            className="text-lg font-semibold"
            style={{ color: theme.text }}
          >
            ${price}
          </Text>
        </View>

        <View
          className="mx-4 space-y-2"
        >
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
              style={{ backgroundColor: size === 'small' ? theme.bgLight : 'rgba(0,0,0,0.07)' }}
            >
              <Text className={size === 'small' ? 'text-white' : 'text-gray-700'}>
                Small
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => set_size('medium')}
              className="p-3 px-8 rounded-full"
              style={{ backgroundColor: size === 'medium' ? theme.bgLight : 'rgba(0,0,0,0.07)' }}
            >
              <Text className={size === 'medium' ? 'text-white' : 'text-gray-700'}>
                Medium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => set_size('larger')}
              className="p-3 px-8 rounded-full"
              style={{ backgroundColor: size === 'larger' ? theme.bgLight : 'rgba(0,0,0,0.07)' }}
            >
              <Text className={size === 'larger' ? 'text-white' : 'text-gray-700'}>
                Larger
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          className="mx-4 space-y-2 h-28"
        >
          <Text
            style={{
              color: theme.text,
            }}
            className="text-lg font-bold"
          >
            About
          </Text>
          <Text className="text-gray-700">
            {desc}
          </Text>
        </View>

        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-1">
            <Text
              className="text-base text-gray-700 font-semibold opacity-60"
            >
              Volume
            </Text>
            <Text
              className="text-base text-gray-700 font-semibold"
            >
              {volume}
            </Text>
          </View>

          <View
            className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4"
          >
            <TouchableOpacity>
              <MinusIcon size={20} strokeWidth={3} color={theme.text} />
            </TouchableOpacity>
            <Text style={{ color: theme.text }} className="font-extrabold text-lg" >2</Text>
            <TouchableOpacity>
              <PlusIcon size={20} strokeWidth={3} color={theme.text} />
            </TouchableOpacity>
          </View>
        </View>
        {/* bu  y now button */}
        <View
          className="flex-row justify-between mx-4"
        >  
            <TouchableOpacity className="p-4 rounded-full border border-gray-400">
              <ShoppingBagIcon size={30} color={"gray"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:theme.bgLight
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
  );
};

export { Product };
