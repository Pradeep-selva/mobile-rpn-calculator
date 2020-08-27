import React from "react";
import Button from "./Button";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.stacks}>
        <View style={styles.stackRow}>
          <Text style={styles.stackText}>0</Text>
        </View>
        <View style={styles.stackRow}>
          <Text style={styles.stackText}>0</Text>
        </View>
        <View style={styles.stackRow}>
          <Text style={styles.stackText}>0</Text>
        </View>
      </View>
      <View style={styles.inputSection}>
        <View style={styles.row}>
          <Button text='clr' />
          <Button text='pow' />
          <Button text='swap' />
          <Button text='/' />
        </View>
        <View style={styles.row}>
          <Button text='9' />
          <Button text='8' />
          <Button text='7' />
          <Button text='X' />
        </View>
        <View style={styles.row}>
          <Button text='6' />
          <Button text='5' />
          <Button text='4' />
          <Button text='-' />
        </View>
        <View style={styles.row}>
          <Button text='3' />
          <Button text='2' />
          <Button text='1' />
          <Button text='+' />
        </View>
        <View style={styles.row}>
          <Button text='0' />
          <Button text='.' />
          <Button text='enter' emphasis />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "10%"
  },
  stacks: {
    flex: 1
  },
  stackRow: {
    flex: 1,
    backgroundColor: "#424242",
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  stackText: {
    textAlign: "right",
    justifyContent: "center",
    color: "#ffffff",
    marginTop: "10%",
    marginRight: "5%",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputSection: {
    flex: 2,
    backgroundColor: "#e6dddc"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#1e1f1f"
  }
});
