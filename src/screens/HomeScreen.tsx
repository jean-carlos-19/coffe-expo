import React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { Categories, Coffes, Header, SearchBar } from '@/atomic/components';
import { theme } from '@/atomic/theme';

const { width, height } = Dimensions.get('window');
const HomeScreen = () => {
 return (
  <>
   <StatusBar barStyle={'light-content'} backgroundColor={theme.gray} />
   <View
    style={{
     width,
     height,
    }}
    className="flex-col justify-start items-stretch space-y-8"
   >
    <Header />
    <View></View>
    <SearchBar />
    <View></View>
    <Categories />
    <View className="flex flex-row items-center justify-center">
     <Coffes />
    </View>
   </View>
  </>
 );
};

export { HomeScreen };
