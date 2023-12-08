const PageDesc = ({ name }: { name: string }) => {
  return (
    <div className="border-y-2 bg-transparent border-main">
      <h2 className="pl-3 text-3xl font-handJet">{name}</h2>
    </div>
  );
};

export default PageDesc;
