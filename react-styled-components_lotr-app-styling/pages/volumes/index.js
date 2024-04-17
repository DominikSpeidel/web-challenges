import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import NextLink from "../../component/Link";
import styled, { css } from "styled-components";

const StyledLi = styled.li`
  list-style-type: "🔥";
  background-color: ${(props) => props.$color};
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <StyledLi $color={volume.color} key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </StyledLi>
        ))}
      </ul>
    </>
  );
}
