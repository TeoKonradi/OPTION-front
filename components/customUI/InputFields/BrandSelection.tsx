import { useFormContext } from "react-hook-form";

import { Brand, useBrands } from "../../../lib/api";
import { cn } from "../../ui";
import { ErrorEmptyStatus, Loading } from "../Errors&Messages/Error&otherStuff";

export const BrandSelection: React.FC = () => {
  const { data, isError, isSuccess } = useBrands();
  const { setValue, watch } = useFormContext();
  const selectedBrands = watch("brand", []);

  const toggleSelection = (brandId: number) => {
    if (selectedBrands.includes(brandId)) {
      const updatedBrands = selectedBrands.filter((id: number) => id !== brandId);
      setValue("brand", updatedBrands);
    } else {
      setValue("brand", [...selectedBrands, brandId]);
    }
  };

  if (isError) {
    return <ErrorEmptyStatus title="Error loading brands..." />;
  }

  if (!isSuccess || !data) {
    return <Loading />;
  }

  return (
    <div className="flex w-[490px] overflow-x-hidden">
      <div className="flex gap-2 overflow-x-scroll">
        {data.items.map((brand: Brand) => {
          const brandSelected = selectedBrands.includes(brand.ID);
          return (
            <div
              className={cn(
                "m-1.5 cursor-pointer border-2 border-gray-800 px-2 py-1.5 shadow-sm",
                brandSelected ? "bg-gray-800 text-white" : "bg-white text-gray-800",
              )}
              key={brand.ID}
              onClick={() => toggleSelection(brand.ID)}
            >
              {brand.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
