import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";
import colors from "../../assets/colors";

export type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Rubik_600SemiBold",
    fontSize: 18,
    color: colors.text,
  },
});

export default Title;
