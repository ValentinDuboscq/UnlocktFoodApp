import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const Morning = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <G
        clipPath="url(#clip0_8631_3645)"
        stroke="#23191A"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.592 13.592a3.665 3.665 0 00-1.159-6.03 3.667 3.667 0 101.16 6.03zM5.814 16.186l-1.296 1.296M5.814 5.814L4.518 4.518M16.186 5.814l1.296-1.296M16.186 16.186l1.296 1.296M3.667 11H1.833M11 3.667V1.833M18.333 11h1.834M11 18.333v1.834" />
      </G>
      <Defs>
        <ClipPath id="clip0_8631_3645">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Morning;
