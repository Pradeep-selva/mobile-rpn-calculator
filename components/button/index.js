import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, emphasis, onPress }) => (
  <TouchableOpacity
    style={emphasis ? styles.emphasisContainer : styles.container}
    onPress={() => onPress(text)}
  >
    <Text style={emphasis ? styles.emphasisText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
