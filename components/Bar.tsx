import Link from "next/link";

const Bar = () => {
  return (
    <div className="w-full flex">
      <div className="text-5xl h-[100px] flex items-center">
        <Link href="/">
          <h1 className="pl-8 text-5xl">gett markett - admin</h1>
        </Link>
      </div>
    </div>
  );
};

export default Bar;
