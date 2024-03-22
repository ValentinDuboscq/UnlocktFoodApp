import { Text, View } from "react-native";
import { Link } from "expo-router";
import Button from "../components/atoms/Button";

export default function Welcome() {
  return (
    <View>
      <Text>Welcome page</Text>
      <Button href="/home" title="Get started" />
    </View>
  );
}
