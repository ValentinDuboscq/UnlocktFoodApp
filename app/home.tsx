import { StyleSheet, View } from "react-native";
import React from "react";
import List from "../components/List";

export default function Home() {
  return (
    <View style={styles.content}>
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
