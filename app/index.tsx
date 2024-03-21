import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <View>
      <Text>Welcome page</Text>
      <Link href="/home">Home</Link>
    </View>
  );
}
