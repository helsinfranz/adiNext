import Image from "next/image";

export default function Learn() {
  return (
    <>
      <p>Class 10</p>
      <img src="/decex_black_raw.png" alt="DeceX" className="img_tag" />
      <Image
        src="/decex_black_raw.png"
        alt="DeceX"
        className="img_tag"
        width={250}
        height={100}
        // quality={75} //default is 75
        // quality={1}
      />
    </>
  );
}
