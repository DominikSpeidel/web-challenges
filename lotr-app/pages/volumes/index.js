import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  function getRandomElement(ungenutzterParameter) {
    const randomPage = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${randomPage.slug}`);
  }
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={getRandomElement}>Go to a random Volume</button>
    </>
  );
}
