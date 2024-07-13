import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Login } from "../components/auth/login";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(11, 9, 9)",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(11, 9, 9)" },
          headerShadowVisible: true,
          headerTitle: "",
        }}
      />
      <Login router={router} />
    </SafeAreaView>
  );
};

export default Home;
