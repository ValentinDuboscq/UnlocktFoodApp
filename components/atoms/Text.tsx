import { StyleSheet, Text as NativeText } from "react-native";
import { ReactNode } from "react";
import { TextProps } from "react-native/Libraries/Text/Text";
import colors from "../../assets/colors";

const Text = ({ children, ...props }: { children: ReactNode } & TextProps) => {
  return (
    <NativeText style={styles.text} {...props}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Rubik_400Regular",
    color: colors.text,
  },
});

export default Text;
