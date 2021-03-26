import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={imageSource} />
      </TouchableOpacity>

      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
