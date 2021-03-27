import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_FIXED = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue
    // change === +20, -20
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_FIXED)}
        onDecrease={() => setColor("red", -1 * COLOR_FIXED)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_FIXED)}
        onDecrease={() => setColor("green", -1 * COLOR_FIXED)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_FIXED)}
        onDecrease={() => setColor("blue", -1 * COLOR_FIXED)}
        color='Blue'
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
