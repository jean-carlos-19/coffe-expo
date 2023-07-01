import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { IMGENS } from "@/global/img";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import Constans from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { HeartIcon } from "react-native-heroicons/solid";

const { statusBarHeight } = Constans;

const Product = (props: any) => {
  const { item } = props.route.params;
  const navigation = useNavigation();
  console.log(item);
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
        <View></View>
      </View>
    </View>
  );
};

export { Product };
