import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import List from "../components/organisms/List";
import * as Device from "expo-device";
import Title from "../components/atoms/Title";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/organisms/Header";
import WithPadding from "../components/templates/WithPadding";
import EnergyBurnedBanner from "../components/organisms/EnergyBurnedBanner";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.content}>
        <Header />
        {Device.deviceName ? (
          <WithPadding>
            <Title style={{ fontSize: 24, paddingBottom: 24 }}>
              {Device.deviceName}
            </Title>
          </WithPadding>
        ) : null}
        <EnergyBurnedBanner />
        <List title="Favorite Pizzas" type="pizzas" />
        <List title="Favorite Chickens" type="fried-chicken" />
        <List title="Favorite BBQs" type="bbqs" />
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
