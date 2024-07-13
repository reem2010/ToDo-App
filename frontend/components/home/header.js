import { Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Header = ({ iconUrl, router }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace(`/login`);
  };

  return (
    <TouchableOpacity style={{ paddingRight: 15 }} onPress={handleLogout}>
      <Image
        style={{ width: 20, height: 25 }}
        source={iconUrl}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Header;
