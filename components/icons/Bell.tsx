import * as React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const Bell = (props: SvgProps) => {
  return (
    <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" {...props}>
      <G clip-path="url(#clip0_8631_3926)">
        <Path
          d="M55.4475 33.5856L50.7766 16.7805C49.4076 11.8572 46.4321 7.53291 42.3233 4.49486C38.2144 1.45681 33.2079 -0.120622 28.0997 0.0133082C22.9914 0.147238 18.0744 1.98484 14.1304 5.23403C10.1864 8.48321 7.44165 12.9575 6.33244 17.9457L2.71623 34.2076C2.31679 36.0045 2.32602 37.8681 2.74325 39.6609C3.16048 41.4538 3.97506 43.13 5.12683 44.5659C6.2786 46.0018 7.73816 47.1606 9.39776 47.9569C11.0574 48.7532 12.8746 49.1666 14.7154 49.1665H17.4539C18.0182 51.9452 19.5257 54.4433 21.721 56.2376C23.9163 58.032 26.6644 59.0122 29.4998 59.0122C32.3351 59.0122 35.0833 58.032 37.2786 56.2376C39.4739 54.4433 40.9814 51.9452 41.5456 49.1665H43.6057C45.5006 49.1667 47.3699 48.7287 49.0675 47.8868C50.7651 47.0449 52.2451 45.822 53.3919 44.3134C54.5386 42.8049 55.3211 41.0517 55.6781 39.1907C56.0351 37.3297 55.957 35.4114 55.4499 33.5856H55.4475ZM29.4998 54.0832C27.9799 54.0769 26.4991 53.6012 25.2599 52.7211C24.0207 51.841 23.0837 50.5995 22.5771 49.1665H36.4224C35.9158 50.5995 34.9788 51.841 33.7397 52.7211C32.5005 53.6012 31.0197 54.0769 29.4998 54.0832ZM49.4762 41.3367C48.7912 42.2455 47.9036 42.982 46.8841 43.4877C45.8646 43.9934 44.7413 44.2544 43.6032 44.2499H14.7154C13.611 44.2497 12.5209 44.0015 11.5253 43.5236C10.5297 43.0458 9.65415 42.3504 8.96325 41.4889C8.27235 40.6274 7.78374 39.6217 7.53349 38.5462C7.28323 37.4706 7.27772 36.3525 7.51736 35.2745L11.1311 19.0102C12.0022 15.0921 14.1581 11.5776 17.2559 9.02551C20.3538 6.47338 24.2159 5.03004 28.2283 4.92493C32.2406 4.81982 36.173 6.05897 39.4002 8.4454C42.6275 10.8318 44.9644 14.2286 46.0394 18.0957L50.7103 34.9008C51.0189 35.9957 51.0681 37.1474 50.8538 38.2646C50.6396 39.3818 50.1679 40.4337 49.4762 41.3367Z"
          fill="#23191A"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8631_3926">
          <Rect width="59" height="59" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Bell;
