import React, { useState } from 'react';
import { Text } from 'react-native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '@/constants';
import { theme } from '@/atomic/theme';
{
 /* categories */
}
const Categories = () => {
 const [activeCategory, setActiveCategry] = useState(1);
 return (
  <View className="px-2 z-20">
   <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={CATEGORIES}
    keyExtractor={(item: any) => item?.id}
    className="overflow-visible"
    renderItem={({ item }) => {
     let isActive: boolean = item.id === activeCategory;
     let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
     return (
      <TouchableOpacity
       onPress={() => setActiveCategry(item.id)}
       className="p-4 rounded-full mx-2 shadow"
       style={{
        backgroundColor: isActive ? theme.bgLight : 'rgba(0,0,0,0.07)',
       }}
      >
       <Text className={'font-semibold ' + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
     );
    }}
   />
  </View>
 );
};

export { Categories };
