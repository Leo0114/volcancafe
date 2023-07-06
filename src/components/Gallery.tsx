/* import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614564/sajmwdgz4qdglkm2hsmq.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614563/upv7zykt999hiwsvuhlq.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614564/yf7rfjohfbqv9y4oqh3n.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614564/w2kawbjuqffjyo5jgiup.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614563/px8fithz1w1aie1zyw3h.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614563/p3yyti6ve83h24h5pm20.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614563/e1bsgsbsiqqbeocee1mp.jpg",
    "https://res.cloudinary.com/diiabesnk/image/upload/v1688614563/s7xmf3wwarc8pgiphb9t.jpg",
  ];

  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction("")}
            style={{ position: "absolute", top: "0", right: "0" }}
          >
            X
          </button>
          <button onClick={() => imgAction("prev-img")}>Anterior</button>
          <img
            src={data.img}
            alt=""
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button onClick={() => imgAction("next-img")}>Siguiente</button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 4: 4 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt="Galeria de imagenes"
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
 */