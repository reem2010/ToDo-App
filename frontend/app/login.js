import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LoginComponent } from "../components/auth/login";
import { commonStyles } from "../styles/common.style";

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#000000" },
          headerShadowVisible: true,
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
      <LoginComponent router={router} />
    </SafeAreaView>
  );
};

export default Login;
