import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_FIXED = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_FIXED })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_FIXED })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_FIXED })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_FIXED })
        }
        color='Green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_FIXED })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_FIXED })
        }
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
