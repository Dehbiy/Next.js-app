import Image from "next/image";
import ProductCart from "./components/ProductCart";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users"> users</Link>
      <ProductCart />
    </main>
  );
}
