import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;
  return <p>Product Id: {productId}</p>;
}
