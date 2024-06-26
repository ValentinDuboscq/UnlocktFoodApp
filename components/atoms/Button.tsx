import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import colors from "../../assets/colors";

const Button = (props: LinkProps & { title: string }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { title } = props;

  return (
    <Link
      {...props}
      asChild
      style={[
        styles.button,
        props.disabled && styles.buttonDisabled,
        props.style,
        isPressed && styles.buttonPressed
      ]}
    >
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={[styles.text, props.disabled && styles.textDisabled]}>
          {title}
        </Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  buttonDisabled: {
    backgroundColor: "#ffdee1",
  },
  buttonPressed: {
    backgroundColor: "#f88f99",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textDisabled: {
    color: colors.primary,
  },
});

export default Button;
