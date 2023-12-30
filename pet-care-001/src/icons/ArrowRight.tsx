import { Path, Svg, SvgProps } from "react-native-svg";

const ArrowRightSvgIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
      />
    </Svg>
  );
};

export default ArrowRightSvgIcon;
