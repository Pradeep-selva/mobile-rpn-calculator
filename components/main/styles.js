import { StyleSheet } from "react-native";

const baseTextStyles = {
  marginTop: "9%",
  marginRight: "4%",
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "right",
  justifyContent: "center"
};

export default StyleSheet.create({
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
  append: {
    ...baseTextStyles,
    color: "#ffffff"
  },
  replace: {
    ...baseTextStyles,
    color: "#17b2e6"
  },
  push: {
    ...baseTextStyles,
    color: "#4eb821"
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
