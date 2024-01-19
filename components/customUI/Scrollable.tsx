import { ReactNode } from "react";

interface ScrollableProps {
  children: ReactNode;
  scrollable: boolean;
}

const Scrollable = ({ children, scrollable }: ScrollableProps) => {
  if (scrollable) {
    return (
      <div className="mr-4 flex h-[550px] w-[900px] flex-col overflow-hidden border-2 border-main py-5 pl-5 pr-1 shadow-lg">
        <div className="flex flex-col items-center overflow-y-auto">{children}</div>
      </div>
    );
  }

  return (
    <div className="mr-4 flex w-[900px] flex-grow flex-col items-center border-2 border-main px-6 py-10 shadow-lg">
      {children}
    </div>
  );
};

export default Scrollable;
