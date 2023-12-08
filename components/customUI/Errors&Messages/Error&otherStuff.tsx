const ErrorLoadingData = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh] text-5xl">
      Error loading brand data
    </div>
  );
};
const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh] text-5xl">
      Loading...
    </div>
  );
};
const ErrorEmptyStatus = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh] text-5xl">
      {title}
    </div>
  );
};

export { Loading, ErrorLoadingData, ErrorEmptyStatus };
