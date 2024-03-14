import React, { useMemo } from "react";

import { View, Text, Image, Button, StyleSheet, Animated } from "react-native";
import { Video } from "expo-av";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Product() {
  const opacity = useMemo(() => new Animated.Value(0), []);

  return (
    <View className="flex flex-1">
      <Header />
      <View className="flex flex-col items-center gap-4 text-center px-3">
        <Text className="float-left font-bold">Video</Text>
        <Video
          isLooping
          isMuted
          positionMillis={500}
          onLoad={() => {
            Animated.timing(opacity, {
              toValue: 1,
              useNativeDriver: true,
            }).start();
          }}
          resizeMode="cover"
          shouldPlay
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          style={styles.video}
        />
      </View>
      <View className="pt-5 p-3">
        <Text className="font-bold">Description</Text>
        <View className="m-3">
          <Text>
            This is Yoga
          </Text>
        </View>
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
  video: {
    width: '100%',
    height: 200,
  },
});
