import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_FIXED = 20;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
        return { ...state, red: state.red + action.amount};
      case "green":
        return { ...state, green: state.green + action.amount};
      case "blue":
        return { ...state, blue: state.blue + action.amount};
      default:
        return;
  }
}

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "red",  amount: COLOR_FIXED })}
        onDecrease={() => dispatch({ colorToChange: "red",  amount: -1 * COLOR_FIXED })}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "green", amount:  COLOR_FIXED})}
        onDecrease={() => dispatch({ colorToChange: "green", amount:  -1 * COLOR_FIXED })}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "blue", amount:  COLOR_FIXED })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount:  -1 * COLOR_FIXED })}
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
