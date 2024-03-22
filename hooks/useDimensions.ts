import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );
    return () => subscription?.remove();
  });

  return dimensions;
};

export default useDimensions;
