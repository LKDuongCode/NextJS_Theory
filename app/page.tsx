import Image from "next/image";
import type { Metadata } from "next";
/// metadata quan trọng trong seo.
export default function page() {
  return (
    <Image
      src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
