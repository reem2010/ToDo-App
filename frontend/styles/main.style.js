import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskHeader: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(239, 239, 255, 0.99)",
    color: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 3,
  },
  task: {
    width: 300,
    minHeight: 200,
    padding: 20,
    margin: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(239, 239, 255, 0.99)",
  },
  editbutton: {
    width: 15,
    height: 15,
    borderWidth: 0,
    cursor: "pointer",
  },
  deletebutton: {
    width: 15,
    height: 15,
    borderWidth: 0,
    cursor: "pointer",
    alignSelf: "flex-end",
    marginTop: 19,
  },
  title: {
    color: "#ffffff",
    margin: "auto",
  },
  description: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 15,
  },
  priority: {
    color: "#ffffff",
    paddingBottom: 5,
  },
  bullet: {
    fontSize: 35,
    marginRight: 10,
    color: "#ffffff",
  },
  taskData: {
    flexDirection: "row",
    alignItems: "center",
  },
  floating: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
