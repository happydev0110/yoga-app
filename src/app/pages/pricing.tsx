import React from "react";

import { View, Text, Image, Button, StyleSheet } from "react-native";

import Header from '../../components/Header';
// import Content from '../../components/Content';
import Footer from '../../components/Footer';

export default function Pricing() {
  const onPressButton = () => {
    console.log('Button Press Purchase')
  }

  return (
    <View className="flex flex-1">
      <Header />
      <View className="flex flex-col items-center gap-4 text-center px-5">
      <Text className="float-left font-bold">Product</Text>
        <Image
          source={require('./../../assets/images/1.jpg')}
          style={styles.image}
        />
        <Button
          title="Play"
          onPress={onPressButton}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'cover', // adjust this according to your image aspect ratio
  },
});

