import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreens';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    TextScreen: TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// export default function App() {
//   const [enteredGoal, setEnteredGoal] = useState("");

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput placeholder='Course Goal' style={styles.input} />
//         <Button title='ADD' />
//       </View>
//       <View />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50,
//   },
//   inputContainer: {
//     // flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     padding: 5,
//     // borderBottomColor: "black",
//     borderBottomWidth: 3,
//     marginBottom: 10,
//     borderColor: "red"
//   },
// });
