"use client";
import Input from "@/app/common/input/input-component";
import React, { useRef, useState } from "react";

interface Image {
  name: string;
  url: string;
}

function BlogForm() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');

  const data = {
    type: "text",
    placeholder: "Enter Title",
  };

  const handleSubmit = (e:Event) => {
    e.preventDefault();
    // console.log("submit");
    console.log(title, description,images);
  };

  const selectFiles = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((imge) => imge.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const deleteImage = (index: number): void => {
    setImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;

    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((imag) => imag.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  return (
    <div className="form-wrapper w-full flex flex-col gap-8">
      <h1 className="form-highlight text-center text-2xl font-semibold text-blue-800">
        Blog Form
      </h1>
      <form
        className="form-contaner flex flex-col gap-8"
        onSubmit={(e) =>handleSubmit}
      >
        <Input
          label="Title"
          className="input-container outline-none border p-2 pl-3 rounded-lg"
          data={data}
          handleChange={(value) => setTitle(value)}
        />

        <div className="input-description flex flex-col gap-2">
          <label>Description</label>
          <textarea
            className="outline-none border p-2 pl-3 rounded-lg"
            placeholder="Enter Description"
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div
          className=" border-2 border-dashed border-slate-500 h-40 rounded-lg flex flex-wrap justify-center py-14 my-5 bg-gray-200 text-slate-500 font-md font-medium"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
            <span>Drop images here</span>
          ) : (
            <>
              Drag & Drop image here or
              <span
                className="ml-1 text-blue-800 underline"
                role="button"
                onClick={selectFiles}
              >
                Browse
              </span>
            </>
          )}
          <input
            name="file"
            type="file"
            multiple
            onChange={onFileSelect}
            ref={fileInputRef}
            className="hidden"
          />
        </div>

        {/* display images container */}
        <div className="flex flex-wrap gap-2">
          {/* display images */}
          {images.map((image, index) => (
            <div
              key={index}
              className="w-28 h-28 bg-slate-400 relative rounded "
            >
              <span
                onClick={(e) => deleteImage(index)}
                className="absolute -top-2 right-1 text-2xl font-bold "
              >
                &times;
              </span>
              <img
                src={image.url}
                alt={image.name}
                className="object-cover w-full h-full rounded"
              />
            </div>
          ))}
        </div>

        <input
          type="submit"
          name="submit"
          value="Submit"
          className="p-2 bg-blue-800 rounded-xl  text-white text-xl font-normal hover:bg-green-300 "
        />
      </form>
    </div>
  );
}

export default BlogForm;
