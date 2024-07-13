import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SignupComponent } from "../components/auth/signup";
import { commonStyles } from "../styles/common.style";

const Signup = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#000000" },
          headerShadowVisible: true,
          headerTintColor: "white",
          headerTitle: "",
        }}
      />
      <SignupComponent router={router} />
    </SafeAreaView>
  );
};

export default Signup;
