import Link from "next/link";
import { useRouter } from "next/router";
import { cities } from "../../lib/data";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const ourCityIndex = cities.findIndex((city) => city.slug === slug);

  const ourCity = cities[ourCityIndex];
  const nextCity = cities[ourCityIndex + 1];
  const previousCity = cities[ourCityIndex - 1];

  console.log(previousCity);

  return (
    <>
      <h1>{ourCity.name}</h1>
      <ul>
        {nextCity ? (
          <li>
            <Link href={`/cities/${nextCity.slug}`}>Next City 👉🏽</Link>
          </li>
        ) : null}
        {previousCity ? (
          <li>
            <Link href={`/cities/${previousCity.slug}`}>👈🏽 Previous City</Link>
          </li>
        ) : null}
        <li>
          <Link href="/">👈🏽 Back to Next.js</Link>
        </li>
        <li>
          <Link href="/cities">👈🏽Back to the other cities</Link>
        </li>
      </ul>

      <></>
    </>
  );
}
