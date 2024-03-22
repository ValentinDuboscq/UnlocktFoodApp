import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import Text from "./Text";
import colors from "../../assets/colors";

export type TitleProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const Title = ({ children, style }: TitleProps) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Rubik_600SemiBold",
    fontSize: 18,
    color: colors.text,
  },
});

export default Title;
