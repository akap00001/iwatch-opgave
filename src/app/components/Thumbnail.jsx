import Image from "next/image";

const Thumbnail = ({ imgsrc, color }) => {
  return (
    <figure className="thumbnail" style={{ backgroundColor: color }}>
      <Image src={imgsrc} alt="" width="90" height="90" />
    </figure>
  );
};

export default Thumbnail;
