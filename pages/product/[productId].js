import Darkheader from "@/component/header/darkheader";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <Darkheader />
      <p className="darkHeader">Product Id: {productId}</p>
    </>
  );
}
