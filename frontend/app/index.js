import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import { Header } from "../components/home/header";
import Icons from "../constants/icon";
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
      <Stack.Screen />
      <Login router={router} />
    </SafeAreaView>
  );
};

export default Home;
