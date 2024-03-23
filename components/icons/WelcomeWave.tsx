import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";
import colors from "../../assets/colors";

function WelcomeWave(props: SvgProps) {
  return (
    <Svg viewBox="0 0 1440 320" {...props}>
      <Path
        fill={colors.primary}
        d="M0 128l48-5.3c48-5.7 144-15.7 240-32C384 75 480 53 576 80c96 27 192 101 288 122.7 96 21.3 192-10.7 288-37.4 96-26.3 192-48.3 240-58.6l48-10.7V0H0z"
      />
    </Svg>
  );
}

export default WelcomeWave;
