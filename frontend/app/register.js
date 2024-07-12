import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SignupComponent } from "../components/auth/signup";

const Signup = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(11, 9, 9)",
      }}
    >
      <Stack.Screen />
      <SignupComponent router={router} />
    </SafeAreaView>
  );
};

export default Signup;
