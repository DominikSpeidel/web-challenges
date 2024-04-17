import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Link href="/cities">Infos über Städte auf der Erde</Link>
    </div>
  );
}
