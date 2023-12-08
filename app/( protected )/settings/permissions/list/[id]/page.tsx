"use client"
const PermissionPage = ({ params }: { params: { id: string } }) => {
  let ID = params.id;
  return (
    <div className="">
      <div className="">
        <div className="text-4xl">Permission ID - {ID}</div>
      </div>
    </div>
  );
};

export default PermissionPage;
