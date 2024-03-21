import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./icons/Star";

const Rate = ({ value }: { value: number }) => {
  const arr = useMemo(
    () => new Array(value > 5 || value < 1 ? 0 : value).fill(1),
    [value],
  );

  return (
    <View style={styles.container}>
      {arr.map((_, index) => (
        <Star key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 1,
  },
});

export default Rate;
