import { StyleSheet, View } from "react-native";
import React from "react";
import List from "../components/List";

export default function Home() {
  return (
    <View style={styles.content}>
      <List title="Favorite Chicken" />
      <List title="Favorite Pizzas" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    gap: 12,
  },
});
