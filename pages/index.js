import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import logo from "../public/logo-white.png";
import heroImage from "../public/heroImage.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file?.preview));
    };
  }, [files]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: (window.URL ? URL : webkitURL).createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img className="" src={file.preview} width={800} height={800} />
      </div>
    </div>
  ));

  return (
    <>
      <Head>
        <title>AlterImage</title>
        <meta name="description" content="Resize images size width height, " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main>
        {/* <div {...getRootProps({ className: `dropzone` })}>
          <input {...getInputProps()} />
          <p>Drag n drop your file here, or click to select file</p>
        </div>
        <div>{thumbs}</div> */}
        <header className="header">
          <div className="logo-box">
            <Image src={logo} alt="Logo" className="logo" />
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Exampur</span>
              <span className="heading-primary-sub">
                Your Problems Our Solutions
              </span>
            </h1>
            <a href="#" className="btn btn-white btn-animated">
              Explore our tools
            </a>
          </div>
        </header>
      </main>
    </>
  );
}
