import Link from "next/link";
import { useRouter } from "next/router";

export default function Learn() {
  const router = useRouter();
  return (
    <>
      <p>Learn</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div onClick={() => router.push("/product/asus")}>Go to Product</div>
        <a href="/product/asus">Go to Product</a>
        <Link href="/product/asus">Go to Product</Link>
      </div>
    </>
  );
}
