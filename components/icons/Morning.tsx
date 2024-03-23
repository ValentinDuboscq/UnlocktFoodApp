import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const Morning = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <G
        clipPath="url(#clip0_8631_3664)"
        stroke="#23191A"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2.75 11h.917M11 2.75v.917M18.333 11h.917M5.133 5.133l.642.642M16.867 5.133l-.642.642M7.333 11a3.667 3.667 0 117.334 0M2.75 14.667h16.5M2.75 18.333h16.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_8631_3664">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Morning;
