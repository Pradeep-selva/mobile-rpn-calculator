import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

const baseContainer = {
  justifyContent: "center",
  alignItems: "center",
  borderRightWidth: 1,
  borderColor: "#1e1f1f"
};

const baseText = {
  fontSize: 30,
  fontWeight: "bold"
};

const Button = ({ text, emphasis }) => (
  <View style={emphasis ? styles.emphasisContainer : styles.container}>
    <TouchableHighlight>
      <Text style={emphasis ? styles.emphasisText : styles.text}>{text}</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...baseContainer,
    flex: 1,
    backgroundColor: "#111211"
  },
  text: {
    ...baseText,
    color: "#a9d1d1"
  },
  emphasisContainer: {
    ...baseContainer,
    flex: 2,
    backgroundColor: "#02dbdb"
  },
  emphasisText: {
    ...baseText,
    color: "#111211"
  }
});

export default Button;
