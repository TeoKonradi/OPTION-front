import { iconCommonPropsI } from '.';

export const Cross = ({ ...props }: iconCommonPropsI) => {
  const color = props.color;
  const [width, height] = [props.width, props.height];
  return (
    <div
      className={`relative w-full h-full flex justify-center items-center w-[${width}] h-[${height}]`}
    >
      <div
        style={{ backgroundColor: color }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-[2px]"
      ></div>
      <div
        style={{ backgroundColor: color }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[315deg] w-full h-[2px]"
      ></div>
    </div>
  );
};
