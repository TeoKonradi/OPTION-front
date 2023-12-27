import { useFormContext } from "react-hook-form";
import { useBrands, Brand } from "../../../lib/api";
import { ErrorEmptyStatus, Loading } from "../Errors&Messages/Error&otherStuff";
import { cn } from "../../ui";

export const BrandSelection: React.FC = () => {
  const { data, isError, isSuccess } = useBrands();
  const { watch, setValue } = useFormContext();
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
      <div className="overflow-x-scroll flex gap-2">
        {data.items.map((brand: Brand) => {
          const brandSelected = selectedBrands.includes(brand.ID);
          return (
            <div
              key={brand.ID}
              className={cn(
                "shadow-sm px-2 py-1.5 m-1.5 border-2 border-gray-800 cursor-pointer",
                brandSelected ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              )}
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
