import { volumes } from "../../lib/data";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
{
/\*
export default function Towers() {
// CSS Styled Components
const StyledDiv = styled.div`    display: flex;
    flex-direction: column;
 `;

const volume = volumes.find((volume) => volume.slug === "the-two-towers");
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
</ul>
<Image
        src="/images/the-two-towers.png"
        alt="Book Cover1"
        width={140}
        height={230}
      ></Image>
<StyledDiv>
<Link href="/volumes/the-fellowship-of-the-ring">
👈🏽 Go to the previous Book
</Link>
<Link href="/volumes/the-return-of-the-king">
Go to the next Book 👉🏽
</Link>
</StyledDiv>
</>
);
}\*/
}
