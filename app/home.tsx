import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import List from "../components/organisms/List";
import * as Device from "expo-device";
import Title from "../components/atoms/Title";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.content}>
        {Device.deviceName ? (
          <Title style={{ fontSize: 24 }}>{Device.deviceName}</Title>
        ) : null}
        <List title="Favorite Pizzas" type="pizzas" />
        <List title="Favorite Chicken" type="fried-chicken" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    gap: 12,
  },
});
