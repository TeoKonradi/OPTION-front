import { ReactNode } from "react";

interface ScrollableProps {
  scrollable: boolean;
  children: ReactNode;
}

const Scrollable = ({ scrollable, children }: ScrollableProps) => {
  if (scrollable) {
    return (
      <div className="flex flex-col w-[900px] mr-4 pl-5 pr-1 py-5 shadow-lg border-2 border-main h-[550px] overflow-hidden">
        <div className="flex flex-col overflow-y-auto items-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[900px] mr-4 px-6 py-10 shadow-lg border-2 border-main flex-grow items-center">
      {children}
    </div>
  );
};

export default Scrollable;
