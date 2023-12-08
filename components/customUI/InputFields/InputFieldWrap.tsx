import { ReactNode } from 'react';

export const InputFieldWrap = ({
  children,
  title,
  space,
}: {
  children: ReactNode;
  title: string;
  space?: number;
}) => {
  return (
    <div className="flex w-full">
      <div className={`w-[${space}px] w-96`}>{title}</div>
      <div className="w-full">{children}</div>
    </div>
  );
};
