import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CoffeeCard } from './CoffeCard';
import { COFFE_ITEMS } from '@/constants';

{
 /* coffee cards */
}
const Coffes = () => {
 return (
  <View className="p-2">
   {/* now we are goin to use a carousel here */}
   <Carousel
    vertical={false}
    containerCustomStyle={{ overflow: 'visible' }}
    data={COFFE_ITEMS}
    renderItem={({ item }) => <CoffeeCard item={item} />}
    firstItem={1}
    loop={true}
    inactiveSlideScale={0.77} // size of inactive alides
    inactiveSlideOpacity={0.75} // opacity of inactive slides
    sliderWidth={400} // card hight
    itemWidth={260} // card width
    slideStyle={{
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
    }}
   />
  </View>
 );
};

export { Coffes };
