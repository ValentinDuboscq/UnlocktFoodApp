import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const WithPadding = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default WithPadding;
