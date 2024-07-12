import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native";
export const Header = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={{ paddingRight: 15 }}>
      <Image
        style={{ width: 20, height: 25 }}
        source={iconUrl}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Header;
