import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderMessage from "../molecules/HeaderMessage";
import Bell from "../icons/Bell";
import WithPadding from "../templates/WithPadding";

const Header = () => {
  return (
    <WithPadding>
      <View style={styles.container}>
        <HeaderMessage />
        <Bell width={20} height={20} />
      </View>
    </WithPadding>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24
  },
});

export default Header;
