import Image from "next/image";
import data from "../data2.json";

const Grid = ({ images = [] }) => (
  <div className="grid grid-cols-4 gap-6 auto-cols-min">
    {images.map((link, index) => (
      <Image
        key={index}
        src={link}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />
    ))}
  </div>
);

export default Grid;
