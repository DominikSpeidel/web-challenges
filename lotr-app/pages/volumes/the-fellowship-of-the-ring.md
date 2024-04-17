/*import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  console.log(volume);

  return (
    <>
      <Link href="/volumes">👈🏽 All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}

        {/* This Solution would work too
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt="Book Cover1"
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes/the-two-towers">Go to the next Book 👉🏽</Link>
    </>
  );
}
*/
