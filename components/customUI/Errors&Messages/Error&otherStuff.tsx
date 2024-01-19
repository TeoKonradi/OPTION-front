const ErrorLoadingData = () => {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center text-5xl">
      Error loading brand data
    </div>
  );
};
const Loading = () => {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center text-5xl">
      Loading...
    </div>
  );
};
const ErrorEmptyStatus = ({ title }: { title: string }) => {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center text-5xl">
      {title}
    </div>
  );
};

export { ErrorEmptyStatus, ErrorLoadingData, Loading };
