import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../atoms/Text";
import Day from "../icons/Day";
import Morning from "../icons/Morning";
import Night from "../icons/Night";
import { SvgProps } from "react-native-svg/src/elements/Svg";

type IconType = "morning" | "day" | "night";

const defaultProps: SvgProps = { width: 20, height: 20 };

const HeaderMessage = () => {
  const [iconType, setIconType] = useState<IconType>("day");

  useEffect(() => {
    const getIconType = (): IconType => {
      const hour = new Date().getHours();

      if (hour >= 8 && hour < 10) {
        return "morning";
      } else if (hour >= 10 && hour < 22) {
        return "day";
      } else {
        return "night";
      }
    };

    setIconType(getIconType());

    const interval = setInterval(() => setIconType(getIconType()), 60000); // 1min

    return () => clearInterval(interval);
  }, []);

  const renderIcon = () => {
    switch (iconType) {
      case "morning":
        return <Morning {...defaultProps} />;
      case "day":
        return <Day {...defaultProps} />;
      case "night":
        return <Night {...defaultProps} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderIcon()}
      <Text>Good morning</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});

export default HeaderMessage;
