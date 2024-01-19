const PageDesc = ({ name }: { name: string }) => {
  return (
    <div className="border-y-2 border-main bg-transparent">
      <h2 className="pl-3 font-handJet text-3xl">{name}</h2>
    </div>
  );
};

export default PageDesc;
