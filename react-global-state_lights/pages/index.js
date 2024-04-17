import Link from "../components/Link";

export default function HomePage({ lights, sum }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{sum()}</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
