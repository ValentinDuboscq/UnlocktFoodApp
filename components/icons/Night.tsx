import * as React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const Morning = (props: SvgProps) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <G
        clipPath="url(#clip0_8631_3659)"
        stroke="#23191A"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M11 2.75h.36a6.875 6.875 0 007.26 11.409A8.25 8.25 0 1111 2.743v.007zM15.583 3.667A1.833 1.833 0 0017.417 5.5a1.833 1.833 0 00-1.834 1.833A1.833 1.833 0 0013.75 5.5a1.834 1.834 0 001.833-1.833zM17.417 10.083h1.833m-.917-.916V11" />
      </G>
      <Defs>
        <ClipPath id="clip0_8631_3659">
          <Path fill="#fff" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Morning;
