import useSWR from "swr";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`);

  if (error) {
    return <h1>Page not found</h1>;
  }

  if (!data) {
    return;
  }
  return <p>{data.name}</p>;
}
