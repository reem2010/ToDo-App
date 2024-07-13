import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Header } from "../components/home/header";
import { HomeComponent } from "../components/home/main";
import Icons from "../constants/icon";
import { Ionicons } from "@expo/vector-icons";
import { AddPopup } from "../components/home/popUp";
import { styles } from "../styles/main.style";
import { commonStyles } from "../styles/common.style";

const Home = () => {
  const router = useRouter();
  const [addVisible, setVisible] = useState(false);
  const [updated, setUpdated] = useState(false);

  const changeVisibility = () => {
    setVisible(!addVisible);
  };

  const triggerUpdated = () => {
    setUpdated(!updated);
  };
  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(11, 9, 9)" },
          headerShadowVisible: true,
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerTitle: "Todo",
          headerRight: () => <Header iconUrl={Icons.logout} router={router} />,
        }}
      />
      <ScrollView>
        <HomeComponent updated={updated} triggerUpdated={triggerUpdated} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floating}
        onPress={() => {
          setVisible(!addVisible);
        }}
      >
        <Ionicons name="add-circle" size={42} color="white" />
      </TouchableOpacity>
      <AddPopup
        changeVisibility={changeVisibility}
        triggerUpdated={triggerUpdated}
        addVisible={addVisible}
      />
    </SafeAreaView>
  );
};

export default Home;
