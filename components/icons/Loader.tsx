import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";
import colors from "../../assets/colors";

const RADIUS = 45;
const DIVIDER = 3;

const Loader = (props: SvgProps) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const circumference = 2 * Math.PI * RADIUS;
  const quarterCircumference = circumference / DIVIDER;

  useEffect(() => {
    animation.addListener((v) => {
      setStrokeDashoffset(circumference - (circumference * v.value) / DIVIDER);
    });

    Animated.loop(
      Animated.timing(animation, {
        toValue: DIVIDER,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animation, circumference]);

  return (
    <Svg height="50" width="50" viewBox="0 0 100 100" {...props}>
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke={colors.text}
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={`${quarterCircumference} ${circumference - quarterCircumference}`}
        strokeDashoffset={strokeDashoffset}
      />
    </Svg>
  );
};

export default Loader;
