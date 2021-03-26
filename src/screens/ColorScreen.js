import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {

    const [count, setCounter] = useState(0);

  return (
    <View>
      <Text>COLOR SCREEN</Text>
      <Button
        onPress={() => {
            setCounter(count + 1)
        }}
        title='Add Color'
      />
      <Text>Current count: {count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
