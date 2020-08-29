import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "../button";
import { Text, View } from "react-native";
import styles from "./styles";
import layout, { operators } from "../../config";
import { pressNum, pressEnter, pressOperator } from "../../redux";

const Main = ({
  calcState: { stack, inputType },
  pressNumAction,
  pressEnterAction,
  pressOperatorAction
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stacks}>
        <View style={styles.stackRow}>
          <Text style={styles.append}>{stack[2] || 0}</Text>
        </View>
        <View style={styles.stackRow}>
          <Text style={styles.append}>{stack[1] || 0}</Text>
        </View>
        <View style={styles.stackRow}>
          <Text style={styles[inputType]}>{stack[0] || 0}</Text>
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
                onPress={
                  element === "enter"
                    ? pressEnterAction
                    : operators.includes(element)
                    ? pressOperatorAction
                    : pressNumAction
                }
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  calcState: state
});

const mapActionsToProps = (dispatch) =>
  bindActionCreators(
    {
      pressNumAction: pressNum,
      pressEnterAction: pressEnter,
      pressOperatorAction: pressOperator
    },
    dispatch
  );

export default connect(mapStateToProps, mapActionsToProps)(Main);
