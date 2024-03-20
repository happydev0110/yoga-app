import React from "react";

// import { View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./pages/home";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Video from "./pages/video";

const Stack = createStackNavigator();

export default function Page() {
  return (
    // <Home />
    // <Product />
    // <Pricing />
    <Video />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="home">
    //     <Stack.Screen name="home" component={Home} />
    //     <Stack.Screen name="product" component={Product} />
    //     <Stack.Screen name="pricing" component={Pricing} />
    //     <Stack.Screen name="video" component={Video} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
