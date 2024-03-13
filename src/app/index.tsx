import React from "react";

import { View } from "react-native";

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}
