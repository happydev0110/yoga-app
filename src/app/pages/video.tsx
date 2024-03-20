// import React, { useEffect, useMemo, useState } from "react";

// // import { View, Text, Image, Button, StyleSheet, Animated } from "react-native";

// import { StyleSheet, View, Button, Text, Image, Animated } from 'react-native';
// import Slider from "@react-native-community/slider"
// import { Video } from "expo-av";

// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// export default function Product() {
//   const [videoStatus, setVideoStatus] = useState({
//     playbackInstance: null,
//     videoUri: 'your-video-uri.mp4', // Replace with your video URI
//     isPlaying: false,
//     playbackPosition: 0,
//     duration: 0,
//     volume: 1,
//     isBuffering: false,
//     isError: false,
//   });

//   useEffect(() => {
//     loadVideo();
//     return unloadVideo;
//   }, []);

//   const loadVideo = async () => {
//     try {
//       const playbackInstance = new Video.Sound();
//       const source = { uri: videoStatus.videoUri };
//       const status = {
//         shouldPlay: videoStatus.isPlaying,
//         positionMillis: videoStatus.playbackPosition,
//         volume: videoStatus.volume,
//       };
//       await playbackInstance.loadAsync(source, status, false);
//       playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
//       setVideoStatus({ ...videoStatus, playbackInstance });
//     } catch (error) {
//       console.error('Error loading video:', error);
//       setVideoStatus({ ...videoStatus, isError: true });
//     }
//   };

//   const unloadVideo = () => {
//     if (videoStatus.playbackInstance) {
//       videoStatus.playbackInstance.unloadAsync();
//     }
//   };

//   const onPlaybackStatusUpdate = (status) => {
//     setVideoStatus({
//       ...videoStatus,
//       isPlaying: status.isPlaying,
//       playbackPosition: status.positionMillis,
//       duration: status.durationMillis,
//       volume: status.volume,
//       isBuffering: status.isBuffering,
//     });
//   };

//   const handlePlayPause = () => {
//     console.log('handle video status')
//     if (videoStatus.playbackInstance) {
//       if (videoStatus.isPlaying) {
//         videoStatus.playbackInstance.pauseAsync();
//       } else {
//         videoStatus.playbackInstance.playAsync();
//       }
//     }
//   };

//   const handleSliderChange = (value) => {
//     if (videoStatus.playbackInstance) {
//       videoStatus.playbackInstance.setPositionAsync(value * videoStatus.duration);
//     }
//   };

//   const handleVolumeChange = (value) => {
//     if (videoStatus.playbackInstance) {
//       videoStatus.playbackInstance.setVolumeAsync(value);
//     }
//   };

//   // const opacity = useMemo(() => new Animated.Value(0), []);
//   console.log(videoStatus.isPlaying, 'video status')
//   return (
//     <View className="flex flex-1">
//       <Header />
//       <View className="flex flex-col items-center gap-4 text-center px-4">
//         <Text className="float-left font-bold">Video</Text>
//         <Video
//           isLooping
//           // isMuted
//           // positionMillis={500}
//           // onLoad={() => {
//           //   Animated.timing(opacity, {
//           //     toValue: 1,
//           //     useNativeDriver: true,
//           //   }).start();
//           // }}
//           // resizeMode="cover"
//           shouldPlay
//           source={{
//             uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
//           }}
//           style={styles.video}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={styles.controls} className="px-4">
//         <Button title={videoStatus.isPlaying ? 'Pause' : 'Play'} onPress={handlePlayPause} />
//         <Slider
//           style={styles.slider}
//           minimumValue={0}
//           maximumValue={1}
//           value={videoStatus.volume}
//           onSlidingComplete={handleVolumeChange}
//         />
//         <Text>{videoStatus.isPlaying ? 'Playing' : 'Paused'}</Text>
//         <Slider
//           style={styles.slider}
//           minimumValue={0}
//           maximumValue={1}
//           value={videoStatus.playbackPosition / videoStatus.duration}
//           onSlidingComplete={handleSliderChange}
//         />
//       </View>
//       <View className="p-4 mt-3">
//         <Text className="font-bold">Description</Text>
//         <View className="m-4">
//           <Text>
//             This is Yoga
//           </Text>
//         </View>
//       </View>
//       <Footer />
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   controls: {
//     // flexDirection: 'row',
//     justifyContent: 'center',
//     // alignItems: 'center',
//     // marginTop: 10,
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
//   slider: {
//     width: '80%',
//     marginHorizontal: 10,
//   },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Slider from "@react-native-community/slider"
import { Video } from 'expo-av';

export default function VideoPlayer() {
  const [videoStatus, setVideoStatus] = useState({
    playbackInstance: null,
    videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', // Replace with your video URI
    isPlaying: false,
    playbackPosition: 0,
    duration: 0,
    volume: 1,
    isBuffering: false,
    isError: false,
  });

  useEffect(() => {
    loadVideo();
    return unloadVideo;
  }, []);

  const loadVideo = async () => {
    try {
      const playbackInstance = new Video.Sound();
      const source = { uri: videoStatus.videoUri };
      const status = {
        shouldPlay: videoStatus.isPlaying,
        positionMillis: videoStatus.playbackPosition,
        volume: videoStatus.volume,
      };
      await playbackInstance.loadAsync(source, status, false);
      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      setVideoStatus({ ...videoStatus, playbackInstance });
    } catch (error) {
      console.error('Error loading video:', error);
      setVideoStatus({ ...videoStatus, isError: true });
    }
  };

  const unloadVideo = () => {
    if (videoStatus.playbackInstance) {
      videoStatus.playbackInstance.unloadAsync();
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    setVideoStatus({
      ...videoStatus,
      isPlaying: status.isPlaying,
      playbackPosition: status.positionMillis,
      duration: status.durationMillis,
      volume: status.volume,
      isBuffering: status.isBuffering,
    });
  };

  const handlePlayPause = () => {
    if (videoStatus.playbackInstance) {
      if (videoStatus.isPlaying) {
        videoStatus.playbackInstance.pauseAsync();
      } else {
        videoStatus.playbackInstance.playAsync();
      }
    }
  };

  const handleSliderChange = (value) => {
    if (videoStatus.playbackInstance) {
      videoStatus.playbackInstance.setPositionAsync(value * videoStatus.duration);
    }
  };

  const handleVolumeChange = (value) => {
    if (videoStatus.playbackInstance) {
      videoStatus.playbackInstance.setVolumeAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoStatus.videoUri }}
        style={styles.video}
        resizeMode="contain"
        isLooping={false}
      />
      <View style={styles.controls}>
        <Button title={videoStatus.isPlaying ? 'Pause' : 'Play'} onPress={handlePlayPause} />
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={videoStatus.volume}
          onSlidingComplete={handleVolumeChange}
        />
        <Text>{videoStatus.isPlaying ? 'Playing' : 'Paused'}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={videoStatus.playbackPosition / videoStatus.duration}
          onSlidingComplete={handleSliderChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  slider: {
    width: '80%',
    marginHorizontal: 10,
  },
});
