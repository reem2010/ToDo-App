import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/form.style";
import { loginFetch } from "../../Api/auth";

export const Login = ({ router }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    if (email != "" && password != "") {
      const data = await loginFetch(email, password);
      if (data) {
        setError(data);
      } else {
        router.push(`/home`);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Entre your email"
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          value={email}
          onChangeText={(val) => setEmail(val)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Entre your password"
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          value={password}
          onChangeText={(val) => setPassword(val)}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            router.push(`/register`);
          }}
        >
          <Text style={styles.buttonText}>
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
