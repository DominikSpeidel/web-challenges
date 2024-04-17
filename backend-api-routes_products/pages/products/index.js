import useSWR from "swr";

export default function AllListingsPage() {
  const { data, error } = useSWR(`/api/products/`);

  if (error) return <div>Error</div>;

  if (!data) return <div>There is no data</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {`
          ${product.name}: 
          ${product.description},
          currency: ${product.currency},
          Type: ${product.category}`}
        </li>
      ))}
    </ul>
  );
}
