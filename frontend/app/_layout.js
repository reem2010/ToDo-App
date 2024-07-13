import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "login",
};

const Layout = () => {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default Layout;
