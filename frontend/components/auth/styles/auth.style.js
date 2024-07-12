import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.99)",
    textAlign: "center",
  },
  form: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.99)",
    borderColor: "rgba(239, 239, 255, 0.99)",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    color: "#ffffff",
    marginBottom: 30,
    fontSize: 50,
    textAlign: "center",
  },
  textInput: {
    width: "90%",
    height: "90",
    borderWidth: 0.8,
    borderColor: "rgba(239, 239, 255, 0.99)",
    borderRadius: 15,
    textAlign: "center",
    paddingHorizontal: 10,
    color: "rgba(255, 255, 255, 0.72)",
    margin: 8,
    paddingVertical: 10,
  },
  submit: {
    minWidth: 90,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.99)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(239, 239, 255, 0.99)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    padding: 15,
  },
  buttonText: {
    color: "#ffffff",
  },
  errorText: {
    color: "red",
  },
});
