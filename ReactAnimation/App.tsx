/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  Animated, Easing
} from 'react-native';






function App(): JSX.Element {
  const spinValue = new Animated.Value(0);


  Animated.timing(
    spinValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true
    }
  ).start()

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-360deg', '1080deg']
  })

  const width = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 10]
  })

  const height = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 7]
  })


  return (
    <Animated.View style={styles.container}>
      <Animated.View style={{
        flex: 1,
        justifyContent: 'center',
        transform: [{ rotate: spin }, { scaleX: width }, { scaleY: height }],
        opacity: spinValue
      }} >
        <Text style={styles.task}>TASK1</Text>
      </Animated.View>
    </Animated.View>

  );
}

const styles = StyleSheet.create({

  task: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00ffff'
  },
});

export default App;
