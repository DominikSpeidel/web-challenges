import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Return() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  console.log(volume);

  return (
    <>
      <Link href="/volumes">👈🏽 All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {/*Here i am still using my former Solution*/}
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        alt="Book Cover1"
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes/the-two-towers">👈🏽Go to the previous Book</Link>
    </>
  );
}
