import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default Layout;
