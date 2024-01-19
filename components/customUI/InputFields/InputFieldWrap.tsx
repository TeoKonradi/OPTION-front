import { ReactNode } from "react";

export const InputFieldWrap = ({
  children,
  space,
  title,
}: {
  children: ReactNode;
  space?: number;
  title: string;
}) => {
  return (
    <div className="flex w-full">
      <div className={`w-[${space}px] w-96`}>{title}</div>
      <div className="w-full">{children}</div>
    </div>
  );
};
