import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, emphasis }) => (
  <TouchableOpacity
    style={emphasis ? styles.emphasisContainer : styles.container}
  >
    <Text style={emphasis ? styles.emphasisText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
