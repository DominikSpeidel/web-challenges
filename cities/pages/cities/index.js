import Link from "next/link";
import { cities } from "../../lib/data";

export default function Cities() {
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">👈🏽 Back to Next.js</Link>
    </>
  );
}
