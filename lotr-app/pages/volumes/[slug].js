import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Fellowship() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );
  console.log(volumes);

  const currentVolume = volumes[currentVolumeIndex];
  const previousVolume = volumes[currentVolumeIndex - 1];
  const nextVolume = volumes[currentVolumeIndex + 1];

  if (!currentVolume) {
    return <p>Das angeforderte Volume wurde nicht gefunden.</p>;
  }

  const { cover, books, title, description } = currentVolume;

  console.log(volumes.length);

  return (
    <>
      <Link href="/volumes">👈🏽 All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`Book ${slug}`} width={140} height={230}></Image>
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
