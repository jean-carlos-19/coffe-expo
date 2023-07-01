import { LogBox, View } from "react-native";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from "react-native-heroicons/solid";
import { theme } from "@/global/theme";
import { Home, Product } from "@/views";
import { RootStackParamList } from "@/global/routes";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([""]);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size, focused, color }) => menuIcons(route, focused),
        tabBarStyle: {
          height: 75,
          marginBottom: 15,
          borderRadius: 50,
          backgroundColor: theme.bgLight,
          marginHorizontal: 20,
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favourite" component={Home} />
      <Tab.Screen name="cart" component={Home} />
    </Tab.Navigator>
  );
};
const menuIcons = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean
) => {
  let icon;

  if (route.name === "home")
    icon = focused ? (
      <HomeSolid size={30} color={theme.bgLight} />
    ) : (
      <HomeOutline size={30} color={"white"} />
    );
  if (route.name === "favourite")
    icon = focused ? (
      <HeartSolid size={30} color={theme.bgLight} />
    ) : (
      <HeartOutline size={30} color={"white"} />
    );
  if (route.name === "cart")
    icon = focused ? (
      <BagSolid size={30} color={theme.bgLight} />
    ) : (
      <BagOutline size={30} color={"white"} />
    );

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
