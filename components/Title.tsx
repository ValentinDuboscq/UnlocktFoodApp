import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
// import { Raleway_800ExtraBold, useFonts } from "@expo-google-fonts/raleway";
import Text from "./Text";

export type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  // const [fontsLoaded] = useFonts({
  //   Raleway_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return <Text>Chargement...</Text>;
  // }

  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    // fontFamily: "Raleway_800ExtraBold",
    fontSize: 18,
  },
});

export default Title;
