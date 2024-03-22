import { StyleSheet, View } from "react-native";
import React from "react";
import List from "../components/organisms/List";
import Text from "../components/atoms/Text";

export default function Home() {
  return (
    <View style={styles.content}>
      <Text>Device name</Text>
      <List title="Favorite Pizzas" type="pizzas" />
      <List title="Favorite Chicken" type="fried-chicken" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    gap: 12,
  },
});
