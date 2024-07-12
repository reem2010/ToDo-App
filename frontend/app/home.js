import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import { Header } from "../components/home/header";
import Icons from "../constants/icon";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(11, 9, 9)" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(11, 9, 9)", color: "#ffffff" },
          headerShadowVisible: true,
          headerTitle: "Todo",
          headerRight: () => <Header iconUrl={Icons.logout} />,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
