
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { IMGENS } from '@/global/img'
import { theme } from '@/global/theme'
import { categories, coffeeItems } from '@/global/data'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Carousel from 'react-native-snap-carousel';
import { CoffeeCard } from '@/atomic/component'

const { statusBarHeight } = Constants;

const Home = () => {
  const [activeCategory, setActiveCategry] = useState(1);
  return (
    <View style={{ paddingTop: statusBarHeight }} className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        className='w-max h-40 absolute -top-5 opacity-10'
        source={IMGENS.beansBackground1}
      />
      <SafeAreaView className='flex-1'>
        {/* avatar and bell icon */}
        <View className='px-4 flex-row justify-between items-center pt-2'>
          <Image
            className='w-9 h-9 rounded-full'
            source={IMGENS.avatar}
          />
          <View className='flex-row items-center space-x-2'>
            <MapPinIcon size={25} color={theme.bgLight} />
            <Text className='text-base font-semibold text-gray-700'>New York, NYC</Text>
          </View>
          <BellIcon className='' size={27} color={"black"} />
        </View>
        {/* search bar */}
        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center items-center rounded-full py-1 pl-3 pr-1 bg-[#e6e6e6]'>
            <TextInput
              placeholder='Search'
              className='p-2 flex-1 font-semibold text-gray-500'
            />
            <TouchableOpacity
              className='rounded-full p-2'
              style={{ backgroundColor: theme.bgLight }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className='px-5 mt-6'>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item: any) => item?.id}
            className='overflow-visible'
            renderItem={({ item }) => {
              let isActive: boolean = item.id === activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategry(item.id)}
                  className='p-4 px-5 rounded-full mx-2 shadow'
                  style={{ backgroundColor: isActive ? theme.bgLight : 'rgba(0,0,0,0.07)' }}
                >
                  <Text className={'font-semibold ' + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />

        </View>
        {/* coffee cards */}
        <View className='mt-16 py-2'>
          {/* now we are goin to use a carousel here */}
          <Carousel
            vertical={false}
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.77} // size of inactive alides
            inactiveSlideOpacity={0.75}// opacity of inactive slides
            sliderWidth={400} // card hight 
            itemWidth={260} // card width
           slideStyle={{display:"flex", alignItems:"center"}}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export { Home }
