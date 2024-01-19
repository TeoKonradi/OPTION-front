import Link from "next/link";

const Bar = () => {
  return (
    <div className="flex w-full">
      <div className="flex h-[100px] items-center text-5xl">
        <Link href="/">
          <h1 className="pl-8 text-5xl">gett markett - admin</h1>
        </Link>
      </div>
    </div>
  );
};

export default Bar;
