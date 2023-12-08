// ... (other imports)
import { ChangeEvent, useRef } from "react";
import { RootState } from "../../../store/rootReducer";
import { addFileUrl, removeFileUrl } from "../../../store/FilesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "../../ui/button";

interface FileUploaderProps {
  id?: string;
  isMultiple?: boolean;
  fileType: "picture" | "file";
}

export const FileUploaderBeta: React.FC<FileUploaderProps> = (props) => {
  const parseFileType = (fileType: "picture" | "file") => {
    switch (fileType) {
      case "picture":
        return ".jpeg, .png, .jpg";
      case "file":
      default:
        return "";
    }
  };

  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    if (images) {
      Array.from(images).forEach((file) => {
        const imageUrl = URL.createObjectURL(file);
        dispatch(addFileUrl(imageUrl));
      });
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const removeImage = (urlToRemove: string) => {
    dispatch(removeFileUrl(urlToRemove));
  };

  const isDisabled = () => {
    if (props.isMultiple === false && files.length === 1) {
      return true;
    } else if (props.isMultiple === true || undefined) {
      return false;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-end gap-5 [&>*:nth-last-child(-n+1)]:mb-5">
        {files.map((imageUrl: string) => (
          <div
            key={imageUrl}
            className="w-96 relative shadow-sm"
          >
            <img
              src={imageUrl}
              className="object-cover object-center"
              alt={`image-${imageUrl}`}
            />
            <Button
              className="absolute top-0 right-0 w-8 h-8 bg-main text-white text-4xl"
              onClick={() => removeImage(imageUrl)}
            >
              <div className="rotate-45">+</div>
            </Button>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Button
          type="button"
          className="w-full"
          onClick={handleClick}
          style={{ fontSize: `5vh` }}
        >
          +
          <input
            id={props.id}
            accept={parseFileType(props.fileType)}
            ref={inputRef}
            onChange={handleChange}
            multiple={props.isMultiple}
            disabled={isDisabled()}
            style={{ visibility: "hidden", display: "none" }}
            type="file"
          />
        </Button>
      </div>
    </div>
  );
};
