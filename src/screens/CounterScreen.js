import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    const [count, setCounter] = useState(0);

  return (
    <View>
      <Text>COUNTER SCREEN</Text>
      <Button
        onPress={() => {
            setCounter(count + 1)
        }}
        title='Increase'
      />
      <Button
        onPress={() => setCounter(count - 1)}
        title='Decrease'
      />
      <Text>Current count: {count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
