//@ mtlb root folder hota hai 

import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  console.log("hello hello helo");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">about</Link>
    </main>
  );
}
