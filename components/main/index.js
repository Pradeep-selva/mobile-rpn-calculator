import React from "react";
import Button from "../button";
import { Text, View } from "react-native";
import styles from "./styles";
import layout from "../../config";

const Main = () => {
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
        {layout.map((item) => (
          <View style={styles.row} key={Math.floor(Math.random() * 10000)}>
            {item.row.map((element) => (
              <Button
                text={element}
                emphasis={element === "enter" && true}
                key={Math.floor(Math.random() * 10000)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Main;
