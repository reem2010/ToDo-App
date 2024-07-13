import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/form.style";
import { registerFetch } from "../../Api/auth";

export const SignupComponent = ({ router }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (email != "" && password != "" && name != "") {
      const data = await registerFetch(email, password, name);
      if (data) {
        setError(data);
      } else {
        router.replace(`/`);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Entre your name"
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          value={name}
          onChangeText={(val) => setName(val)}
          style={styles.textInput}
        />
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
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            router.replace(`/`);
          }}
        >
          <Text style={styles.buttonText}>
            Already have an account? login here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
