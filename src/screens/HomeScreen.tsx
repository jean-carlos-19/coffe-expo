import React from 'react';
import { View, StatusBar } from 'react-native';
import { Categories, Coffes, Header, SearchBar } from '@/atomic/components';

const HomeScreen = () => {
 return (
  <>
   <StatusBar />
   <View className="w-full h-full flex-col justify-between items-stretch">
    <Header />
    <SearchBar />
    <Categories />
    <Coffes />
   </View>
  </>
 );
};

export { HomeScreen };
