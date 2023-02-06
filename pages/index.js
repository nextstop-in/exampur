import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useEffect } from "react";
// import styles from "../styles/Home.module.scss";
// import Header from "@/components/Header/Header";
import logo from "../public/logo-white.png";
import nat1 from "../public/nat-1-large.jpg";
import nat2 from "../public/nat-2-large.jpg";
import nat3 from "../public/nat-3-large.jpg";

// import heroImage from "../public/heroImage.svg";

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
      <img className="image" src={file.preview} />
    </div>
  ));

  const table = (data) => (
    <div>
      <table>
        <tr>
          <th>Original </th>
          <th>Updated </th>
        </tr>
        <tr>
          <td>James Bond</td>
          <td>007</td>
          <td>007</td>
        </tr>
        <tr>
          <td>Lucipher</td>
          <td>666</td>
          <td>007</td>
        </tr>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>AlterImage</title>
        <meta name="description" content="Resize images size width height, " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

      <header className="header">
        <div className="header__logo-box">
          <Image src={logo} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Exampur</span>
            <span className="heading-primary--sub">
              Your Problems Our Solutions
            </span>
          </h1>
          <a href="#about" className="btn btn--white btn--animated">
            Explore our tools
          </a>
        </div>
      </header>
      <main className="main">
        {/* <div className={styles.uploader__box}>
          <div
            {...getRootProps({
              className: `dropzone ${styles.dropzone__uploader}`,
            })}
          >
            {!thumbs.length ? (
              <>
                <input {...getInputProps()} />
                <p className={styles.drop__zone__text}>
                  Drag n drop your file here, or click to select file
                </p>
              </>
            ) : (
              <div className={styles.main__content}>
                {thumbs}
                {table()}
              </div>
            )}
          </div>
        </div> */}

        <section className={"section__about"}>
          <div className={"u-center-text u-margin-bottom-big"}>
            <h2 className={"heading-secondary"}>
              Exciting tools for all image related problems{" "}
            </h2>
          </div>
          <div className={"row"}>
            <div className={"col-1-of-2"}>
              <h3 className="heading-tertiary u-margin-bottom-small">
                get your images exam ready
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                You are going to fall in love with our tools
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <a href="#" className="btn-text">
                Learn More &rarr;
              </a>
            </div>
            <div className={"col-1-of-2"}>
              <div className="composition">
                <Image
                  src={nat1}
                  alt="photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <Image
                  src={nat2}
                  alt="photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <Image
                  src={nat3}
                  alt="photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row">
            {/* firstcolumn */}
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the tools
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            {/* 2nd column */}

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the tools
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            {/* 3rd column */}

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the tools
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            {/* forth column */}

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the tools
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
              </div>
            </div>

            {/* column Finished */}
          </div>
        </section>
        <section className="section-tours">
          <div className={"u-center-text u-margin-bottom-big"}>
            <h2 className={"heading-secondary"}>Most Popular Tools</h2>
          </div>

          <div className="row">
            {/* Column 1 */}
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      All Online Tools
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>col 1 text</li>
                      <li>col 2 text</li>
                      <li>col 3 text</li>
                      <li>col 4 text</li>
                      <li>col 5 text</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Free</p>
                      <p className="card__price-value">Unlimited</p>
                    </div>
                    <a href="#" className="btn btn--white cta-book-now">
                      Check now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      All Form Services
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>col 1 text</li>
                      <li>col 2 text</li>
                      <li>col 3 text</li>
                      <li>col 4 text</li>
                      <li>col 5 text</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">Members</p>
                    </div>
                    <a href="#" className="btn btn--white cta-book-now">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Success Mantra
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>col 1 text</li>
                      <li>col 2 text</li>
                      <li>col 3 text</li>
                      <li>col 4 text</li>
                      <li>col 5 text</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">Rs 99</p>
                    </div>
                    <a href="#" className="btn btn--white cta-book-now">
                      Get now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all tools
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
