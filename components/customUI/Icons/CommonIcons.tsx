import { iconCommonPropsI } from ".";

export const Cross = ({ ...props }: iconCommonPropsI) => {
  const color = props.color;
  const [width, height] = [props.width, props.height];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center w-[${width}] h-[${height}]`}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-[315deg] transform"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
