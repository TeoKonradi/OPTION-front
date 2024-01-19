// ... (other imports)
import { ChangeEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addFileUrl, removeFileUrl } from "../../../store/FilesSlice";
import { RootState } from "../../../store/rootReducer";
import { Button } from "../../ui/button";

interface FileUploaderProps {
  fileType: "file" | "picture";
  id?: string;
  isMultiple?: boolean;
}

export const FileUploaderBeta: React.FC<FileUploaderProps> = (props) => {
  const parseFileType = (fileType: "file" | "picture") => {
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
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-end gap-5 [&>*:nth-last-child(-n+1)]:mb-5">
        {files.map((imageUrl: string) => (
          <div className="relative w-96 shadow-sm" key={imageUrl}>
            <img
              alt={`image-${imageUrl}`}
              className="object-cover object-center"
              src={imageUrl}
            />
            <Button
              className="absolute right-0 top-0 h-8 w-8 bg-main text-4xl text-white"
              onClick={() => removeImage(imageUrl)}
            >
              <div className="rotate-45">+</div>
            </Button>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          onClick={handleClick}
          style={{ fontSize: `5vh` }}
          type="button"
        >
          +
          <input
            accept={parseFileType(props.fileType)}
            disabled={isDisabled()}
            id={props.id}
            multiple={props.isMultiple}
            onChange={handleChange}
            ref={inputRef}
            style={{ display: "none", visibility: "hidden" }}
            type="file"
          />
        </Button>
      </div>
    </div>
  );
};
