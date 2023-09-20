import React from 'react';
import { View, TextInput } from 'react-native';
import { theme } from '@/atomic/theme';
import { CustomButton } from '@/atomic/elements';
import { contentSearchBar, typesButtonConst, typesIcon } from '@/constants';

{
 /* search bar */
}

const SearchBar = () => {
 return (
  <View className="px-4 z-20">
   <View className="flex-row justify-center items-center rounded-full bg-[#e6e6e6]">
    <TextInput
     placeholder={contentSearchBar.placeholder}
     className="p-2 flex-1 font-semibold text-gray-500"
    />
    <CustomButton
     stylyButton={`rounded-full p-2 bg-[${theme.bgLight}]`}
     type={typesButtonConst.icon}
     icon={{
      color: 'white',
      size: 25,
      strokeWidth: 2,
      type: typesIcon.MagnifyingGlassIcon,
     }}
    />
   </View>
  </View>
 );
};

export { SearchBar };
